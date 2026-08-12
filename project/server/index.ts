import express, { type Request, type Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ClientSecretCredential } from "@azure/identity";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3001;

const {
  MICROSOFT_CLIENT_ID,
  MICROSOFT_CLIENT_SECRET,
  MICROSOFT_TENANT_ID,
  MAIL_FROM,
  MAIL_TO,
} = process.env;

// ─────────────────────────────────────────────
// Middleware
// ─────────────────────────────────────────────

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// ─────────────────────────────────────────────
// Vérification des variables d'environnement
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// Authentification Microsoft
// ─────────────────────────────────────────────

const credential = new ClientSecretCredential(
  MICROSOFT_TENANT_ID,
  MICROSOFT_CLIENT_ID,
  MICROSOFT_CLIENT_SECRET
);

// ─────────────────────────────────────────────
// Health check
// ─────────────────────────────────────────────

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Serveur email opérationnel",
  });
});

// ─────────────────────────────────────────────
// Contact
// ─────────────────────────────────────────────

app.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    console.log("📨 Nouvelle demande de contact :", {
      name,
      email,
      subject,
    });

    // Vérification des champs
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Tous les champs sont obligatoires.",
      });
    }

    // Récupération du token Microsoft Graph
    console.log("🔐 Authentification Microsoft Graph...");

    const tokenResponse = await credential.getToken(
      "https://graph.microsoft.com/.default"
    );

    if (!tokenResponse?.token) {
      throw new Error("Impossible d'obtenir le token Microsoft Graph.");
    }

    console.log("✅ Token Microsoft Graph obtenu.");

    // Contenu du mail
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Nouveau message depuis le site Broadway</h2>

        <p>
          <strong>Nom :</strong> ${escapeHtml(name)}
        </p>

        <p>
          <strong>Email :</strong> ${escapeHtml(email)}
        </p>

        <p>
          <strong>Sujet :</strong> ${escapeHtml(subject)}
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

    // Envoi via Microsoft Graph
    console.log(`📤 Envoi du mail depuis ${MAIL_FROM} vers ${MAIL_TO}...`);

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

    return res.json({
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

// ─────────────────────────────────────────────
// Protection basique contre l'injection HTML
// ─────────────────────────────────────────────

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ─────────────────────────────────────────────
// Démarrage du serveur
// ─────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});