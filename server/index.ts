import express, { type Request, type Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ClientSecretCredential } from "@azure/identity";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3001;



const FRONTEND_URL =
  process.env.FRONTEND_URL || "http://localhost:5176";

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
  console.error("❌ Variables d'environnement manquantes.");

  console.error({
    MICROSOFT_CLIENT_ID: !!MICROSOFT_CLIENT_ID,
    MICROSOFT_CLIENT_SECRET: !!MICROSOFT_CLIENT_SECRET,
    MICROSOFT_TENANT_ID: !!MICROSOFT_TENANT_ID,
    MAIL_FROM: !!MAIL_FROM,
    MAIL_TO: !!MAIL_TO,
  });

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
// Authentification Microsoft Graph
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
// API Contact
// ============================================================

app.post("/api/contact", async (req: Request, res: Response) => {
  try {
    console.log("══════════════════════════════════════");
    console.log("🚨 API CONTACT APPELÉE");

    console.log("🌐 IP :", req.ip);
    console.log("🔗 Origin :", req.headers.origin);
    console.log("🖥️ User-Agent :", req.headers["user-agent"]);

    const body = req.body;

    console.log("📦 Body :", body);

    if (!body || typeof body !== "object") {
      return res.status(400).json({
        success: false,
        message: "Corps de la requête invalide.",
      });
    }

    const {
      name,
      email,
      subject,
      message,
    }: {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    } = body;

    console.log("👤 Nom :", name);
    console.log("📧 Email :", email);
    console.log("📝 Sujet :", subject);

    // ----------------------------------------------------------
    // Validation
    // ----------------------------------------------------------

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs sont obligatoires.",
      });
    }

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
    // Construction du mail
    // ----------------------------------------------------------

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Nouveau message depuis le site Broadway</h2>

        <p>
          <strong>Nom :</strong>
          ${escapeHtml(name)}
        </p>

        <p>
          <strong>Email :</strong>
          ${escapeHtml(email)}
        </p>

        <p>
          <strong>Sujet :</strong>
          ${escapeHtml(subject)}
        </p>

        <hr />

        <p>
          <strong>Message :</strong>
        </p>

        <p>
          ${escapeHtml(message).replace(/\n/g, "<br />")}
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
                  name,
                },
              },
            ],
          },

          saveToSentItems: true,
        }),
      }
    );

    // ----------------------------------------------------------
    // Gestion erreur Microsoft Graph
    // ----------------------------------------------------------

    if (!graphResponse.ok) {
      const errorText = await graphResponse.text();

      console.error("❌ Microsoft Graph error");
      console.error("Status :", graphResponse.status);
      console.error("Response :", errorText);

      return res.status(graphResponse.status).json({
        success: false,
        message: `Microsoft Graph a refusé l'envoi (${graphResponse.status}).`,
        details: errorText,
      });
    }

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
      message: "Une erreur est survenue lors de l'envoi du message.",
    });
  }
});

// ============================================================
// Frontend React/Vite
// ============================================================

// En production, server/index.ts se trouve dans :
// dist/server/index.js
//
// Le dossier dist du frontend se trouve donc deux niveaux plus haut.

const distPath = path.resolve(__dirname, "..",  "dist");

console.log("📁 Dossier frontend :", distPath);



// Toutes les routes frontend sont renvoyées vers index.html.
// IMPORTANT : Express 5 ne permet plus app.get("*").
// On utilise donc un middleware sans chemin.

app.use((req: Request, res: Response, next) => {
  if (
    req.method !== "GET" ||
    req.path.startsWith("/api/")
  ) {
    return next();
  }

  res.sendFile(path.join(distPath, "index.html"));
});

// ============================================================
// Gestion des erreurs
// ============================================================

app.use(
  (
    error: unknown,
    _req: Request,
    res: Response,
    _next: express.NextFunction
  ) => {
    console.error("❌ Erreur serveur :", error);

    res.status(500).json({
      success: false,
      message: "Erreur interne du serveur.",
    });
  }
);

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

// ============================================================
// Démarrage
// ============================================================

app.listen(PORT, "0.0.0.0", () => {
  console.log("");
  console.log("══════════════════════════════════════");
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
  console.log(`🌐 CORS : ${FRONTEND_URL}`);
  console.log(`📁 Frontend : ${distPath}`);
  console.log("══════════════════════════════════════");
});