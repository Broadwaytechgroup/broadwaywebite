import express, { type Request, type Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ClientSecretCredential } from "@azure/identity";
import path from "node:path";
import { fileURLToPath } from "node:url";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// En production, Render fournit cette variable.
// En local, on utilise localhost.
const FRONTEND_URL =
  process.env.FRONTEND_URL || "http://localhost:5175";

const {
  MICROSOFT_CLIENT_ID,
  MICROSOFT_CLIENT_SECRET,
  MICROSOFT_TENANT_ID,
  MAIL_FROM,
  MAIL_TO,
} = process.env;

// ============================================================
// Vérification des variables d'environnement
// ============================================================

if (
  !MICROSOFT_CLIENT_ID ||
  !MICROSOFT_CLIENT_SECRET ||
  !MICROSOFT_TENANT_ID ||
  !MAIL_FROM ||
  !MAIL_TO
) {
  console.error(
    "❌ Variables d'environnement Microsoft ou email manquantes."
  );

  process.exit(1);
}

// ============================================================
// Middleware
// ============================================================

app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ============================================================
// Microsoft Graph
// ============================================================

const credential = new ClientSecretCredential(
  MICROSOFT_TENANT_ID,
  MICROSOFT_CLIENT_ID,
  MICROSOFT_CLIENT_SECRET
);

// ============================================================
// Health check
// ============================================================

app.get("/api/health", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Serveur email opérationnel",
  });
});

// ============================================================
// API CONTACT
// ============================================================

app.post("/api/contact", async (req: Request, res: Response) => {
  try {
    console.log("══════════════════════════════════════");
    console.log("🚨 API CONTACT APPELÉE");
    console.log("🌐 Origin :", req.headers.origin);
    console.log("🌐 IP :", req.ip);
    console.log("📦 Body :", req.body);

    const body = req.body ?? {};

    const { name, email, subject, message } = body;

    // ----------------------------------------------------------
    // Validation
    // ----------------------------------------------------------

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs sont obligatoires.",
      });
    }

    console.log("👤 Nom :", name);
    console.log("📧 Email :", email);
    console.log("📝 Sujet :", subject);

    // ----------------------------------------------------------
    // Authentification Microsoft Graph
    // ----------------------------------------------------------

    console.log("🔐 Authentification Microsoft Graph...");

    const tokenResponse = await credential.getToken(
      "https://graph.microsoft.com/.default"
    );

    if (!tokenResponse?.token) {
      throw new Error(
        "Impossible d'obtenir le token Microsoft Graph."
      );
    }

    console.log("✅ Token Microsoft Graph obtenu.");

    // ----------------------------------------------------------
    // Préparation du contenu du mail
    // ----------------------------------------------------------

    const emailHtml = `
      <div
        style="
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #222;
        "
      >
        <h2>Nouveau message depuis le site Broadway</h2>

        <p>
          <strong>Nom :</strong>
          ${escapeHtml(String(name))}
        </p>

        <p>
          <strong>Email :</strong>
          ${escapeHtml(String(email))}
        </p>

        <p>
          <strong>Sujet :</strong>
          ${escapeHtml(String(subject))}
        </p>

        <hr />

        <p>
          <strong>Message :</strong>
        </p>

        <p>
          ${escapeHtml(String(message)).replace(/\n/g, "<br />")}
        </p>
      </div>
    `;

    // ----------------------------------------------------------
    // Envoi Microsoft Graph
    // ----------------------------------------------------------

    console.log(
      `📤 Envoi du mail depuis ${MAIL_FROM} vers ${MAIL_TO}...`
    );

    const graphResponse = await fetch(
      `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(
        MAIL_FROM
      )}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenResponse.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: `[Site Broadway] ${subject}`,

            body: {
              contentType: "HTML",
              content: emailHtml,
            },

            toRecipients: [
              {
                emailAddress: {
                  address: MAIL_TO,
                },
              },
            ],

            replyTo: [
              {
                emailAddress: {
                  address: email,
                  name: String(name),
                },
              },
            ],
          },

          saveToSentItems: true,
        }),
      }
    );

    // ----------------------------------------------------------
    // Gestion erreur Graph
    // ----------------------------------------------------------

    if (!graphResponse.ok) {
      const errorText = await graphResponse.text();

      console.error("❌ Microsoft Graph error");
      console.error("Status :", graphResponse.status);
      console.error("Response :", errorText);

      return res.status(graphResponse.status).json({
        success: false,
        message: `Microsoft Graph a refusé l'envoi (${graphResponse.status}).`,
      });
    }

    // ----------------------------------------------------------
    // Succès
    // ----------------------------------------------------------

    console.log("✅ Email envoyé avec succès.");
    console.log("══════════════════════════════════════");

    return res.status(200).json({
      success: true,
      message: "Votre message a été envoyé avec succès.",
    });
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi du message :");

    if (error instanceof Error) {
      console.error(error.message);
      console.error(error.stack);
    } else {
      console.error(error);
    }

    return res.status(500).json({
      success: false,
      message:
        "Une erreur est survenue lors de l'envoi du message.",
    });
  }
});

// ============================================================
// Fichiers statiques du frontend
// ============================================================

const distPath = path.resolve(__dirname, "../dist");

app.use(express.static(distPath));

// ============================================================
// Fallback SPA
// ============================================================

// Express 5 n'accepte plus app.get("*").
// On utilise un middleware pour éviter l'erreur path-to-regexp.

app.use((req: Request, res: Response, next) => {
  if (req.method !== "GET") {
    return next();
  }

  if (req.path.startsWith("/api/")) {
    return res.status(404).json({
      success: false,
      message: "Route API introuvable.",
    });
  }

  return res.sendFile(path.join(distPath, "index.html"));
});

// ============================================================
// Gestionnaire d'erreurs
// ============================================================

app.use(
  (
    error: unknown,
    _req: Request,
    res: Response,
    _next: unknown
  ) => {
    console.error("❌ Erreur serveur :", error);

    return res.status(500).json({
      success: false,
      message: "Erreur interne du serveur.",
    });
  }
);

// ============================================================
// Démarrage
// ============================================================

app.listen(PORT, "0.0.0.0", () => {
  console.log("══════════════════════════════════════");
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
  console.log(`🌐 Frontend autorisé : ${FRONTEND_URL}`);
  console.log("══════════════════════════════════════");
});

// ============================================================
// Protection HTML
// ============================================================

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}