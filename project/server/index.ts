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
  FRONTEND_URL,
} = process.env;

// ─────────────────────────────────────────────
// Configuration
// ─────────────────────────────────────────────

const allowedOrigins = FRONTEND_URL
  ? FRONTEND_URL.split(",")
      .map((origin) => origin.trim())
      .filter(Boolean)
  : ["http://localhost:5175"];

console.log("🌐 Origines autorisées :", allowedOrigins);

// ─────────────────────────────────────────────
// CORS
// ─────────────────────────────────────────────

app.use(
  cors({
    origin: (origin, callback) => {
      // Autoriser les requêtes sans origin
      // (Postman, PowerShell, serveur, etc.)
      if (!origin) {
        callback(null, true);
        return;
      }

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      console.error("❌ Origine CORS refusée :", origin);

      callback(new Error("Origine non autorisée par CORS."));
    },

    methods: ["GET", "POST", "OPTIONS"],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
    ],
  })
);

// ─────────────────────────────────────────────
// Body parsers
// ─────────────────────────────────────────────

app.use(
  express.json({
    limit: "1mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

// ─────────────────────────────────────────────
// Vérification des variables
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

  console.error(`
Variables nécessaires :

MICROSOFT_CLIENT_ID
MICROSOFT_CLIENT_SECRET
MICROSOFT_TENANT_ID
MAIL_FROM
MAIL_TO
`);

  process.exit(1);
}

// ─────────────────────────────────────────────
// Client Microsoft
// ─────────────────────────────────────────────

const credential = new ClientSecretCredential(
  MICROSOFT_TENANT_ID,
  MICROSOFT_CLIENT_ID,
  MICROSOFT_CLIENT_SECRET
);

// ─────────────────────────────────────────────
// Health check
// ─────────────────────────────────────────────

app.get(
  "/api/health",
  (_req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      message: "Serveur email opérationnel",
    });
  }
);

// ─────────────────────────────────────────────
// Route racine
// ─────────────────────────────────────────────

app.get(
  "/",
  (_req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      message: "API Broadway opérationnelle",
    });
  }
);

// ─────────────────────────────────────────────
// Contact
// ─────────────────────────────────────────────

app.post("/api/contact", async (req: Request, res: Response) => {
  console.log("🚨 API CONTACT APPELÉE");
  console.log("🌐 IP :", req.ip);
  console.log("🔗 Origin :", req.headers.origin);
  console.log("🖥️ User-Agent :", req.headers["user-agent"]);
  console.log("📦 Body :", req.body);

  try {
    // ...
      // ───────────────────────────────────────
      // Vérification du body
      // ───────────────────────────────────────

      if (
        !req.body ||
        typeof req.body !== "object"
      ) {
        console.error("❌ Body absent ou invalide.");

        return res.status(400).json({
          success: false,
          message:
            "Les données du formulaire sont invalides.",
        });
      }

      console.log("📦 Body reçu :", req.body);

      // ───────────────────────────────────────
      // Récupération des champs
      // ───────────────────────────────────────

      const {
        name,
        email,
        subject,
        message,
      } = req.body as {
        name?: unknown;
        email?: unknown;
        subject?: unknown;
        message?: unknown;
      };

      // ───────────────────────────────────────
      // Vérification des types
      // ───────────────────────────────────────

      if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof subject !== "string" ||
        typeof message !== "string"
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Les données du formulaire sont invalides.",
        });
      }

      // ───────────────────────────────────────
      // Nettoyage
      // ───────────────────────────────────────

      const cleanName = name.trim();
      const cleanEmail = email.trim();
      const cleanSubject = subject.trim();
      const cleanMessage = message.trim();

      console.log("👤 Nom :", cleanName);
      console.log("📧 Email :", cleanEmail);
      console.log("📝 Sujet :", cleanSubject);

      // ───────────────────────────────────────
      // Champs obligatoires
      // ───────────────────────────────────────

      if (
        !cleanName ||
        !cleanEmail ||
        !cleanSubject ||
        !cleanMessage
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Tous les champs sont obligatoires.",
        });
      }

      // ───────────────────────────────────────
      // Validation email
      // ───────────────────────────────────────

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(cleanEmail)) {
        return res.status(400).json({
          success: false,
          message:
            "L'adresse email n'est pas valide.",
        });
      }

      // ───────────────────────────────────────
      // Microsoft Graph
      // ───────────────────────────────────────

      console.log(
        "🔐 Authentification Microsoft Graph..."
      );

      const tokenResponse =
        await credential.getToken(
          "https://graph.microsoft.com/.default"
        );

      if (!tokenResponse?.token) {
        throw new Error(
          "Impossible d'obtenir le token Microsoft Graph."
        );
      }

      console.log(
        "✅ Token Microsoft Graph obtenu."
      );

      // ───────────────────────────────────────
      // HTML du message
      // ───────────────────────────────────────

      const emailHtml = `
        <!DOCTYPE html>
        <html lang="fr">
          <head>
            <meta charset="UTF-8" />
            <title>Nouveau message Broadway</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 30px;
              font-family: Arial, Helvetica, sans-serif;
              background: #f5f5f5;
              color: #333333;
            "
          >
            <div
              style="
                max-width: 700px;
                margin: 0 auto;
                background: #ffffff;
                padding: 30px;
                border-radius: 12px;
              "
            >
              <h2>
                Nouveau message depuis le site Broadway
              </h2>

              <p>
                <strong>Nom :</strong>
                ${escapeHtml(cleanName)}
              </p>

              <p>
                <strong>Email :</strong>
                ${escapeHtml(cleanEmail)}
              </p>

              <p>
                <strong>Sujet :</strong>
                ${escapeHtml(cleanSubject)}
              </p>

              <hr />

              <p>
                <strong>Message :</strong>
              </p>

              <p>
                ${escapeHtml(cleanMessage).replace(
                  /\n/g,
                  "<br />"
                )}
              </p>

              <hr />

              <p
                style="
                  color: #777777;
                  font-size: 12px;
                "
              >
                Message envoyé depuis le formulaire
                de contact du site Broadway.
              </p>
            </div>
          </body>
        </html>
      `;

      // ───────────────────────────────────────
      // Envoi Microsoft Graph
      // ───────────────────────────────────────

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
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            message: {
              subject: `[Site Broadway] ${cleanSubject}`,

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
                    address: cleanEmail,
                    name: cleanName,
                  },
                },
              ],
            },

            saveToSentItems: true,
          }),
        }
      );

      // ───────────────────────────────────────
      // Erreur Microsoft Graph
      // ───────────────────────────────────────

      if (!graphResponse.ok) {
        const errorText =
          await graphResponse.text();

        console.error(
          "❌ Microsoft Graph error"
        );

        console.error(
          "Status :",
          graphResponse.status
        );

        console.error(
          "Response :",
          errorText
        );

        return res
          .status(graphResponse.status)
          .json({
            success: false,
            message: `Microsoft Graph a refusé l'envoi (${graphResponse.status}).`,
            details: errorText,
          });
      }

      // ───────────────────────────────────────
      // Succès
      // ───────────────────────────────────────

      console.log(
        "✅ Email envoyé avec succès."
      );

      return res.status(200).json({
        success: true,
        message:
          "Votre message a été envoyé avec succès.",
      });
    } catch (error) {
      console.error(
        "❌ Erreur lors de l'envoi du message :"
      );

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
  }
);

// ─────────────────────────────────────────────
// 404
// ─────────────────────────────────────────────

app.use(
  (_req: Request, res: Response) => {
    res.status(404).json({
      success: false,
      message: "Route introuvable.",
    });
  }
);

// ─────────────────────────────────────────────
// Gestionnaire d'erreurs
// ─────────────────────────────────────────────

app.use(
  (
    error: unknown,
    _req: Request,
    res: Response,
    _next: unknown
  ) => {
    console.error(
      "❌ Erreur Express :",
      error
    );

    if (res.headersSent) {
      return;
    }

    res.status(500).json({
      success: false,
      message:
        "Erreur interne du serveur.",
    });
  }
);

// ─────────────────────────────────────────────
// Protection HTML
// ─────────────────────────────────────────────

function escapeHtml(
  value: string
): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );
}

// ─────────────────────────────────────────────
// Démarrage
// ─────────────────────────────────────────────

app.listen(PORT, () => {
  console.log("");
  console.log(
    "══════════════════════════════════════"
  );
  console.log(
    `✅ Serveur démarré sur http://localhost:${PORT}`
  );
  console.log(
    `🌐 CORS : ${allowedOrigins.join(", ")}`
  );
  console.log(
    "══════════════════════════════════════"
  );
});