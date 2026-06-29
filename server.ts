import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Set high body limit to receive audio base64 data
app.use(express.json({ limit: "15mb" }));

// Lazy initializer for Gemini Client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API endpoint for voice evaluation
app.post("/api/evaluate-voice", async (req, res) => {
  try {
    const { audioBase64, mimeType } = req.body;

    if (!audioBase64) {
      return res.status(400).json({ error: "Missing audio data" });
    }

    const hasApiKey = !!process.env.GEMINI_API_KEY;

    if (!hasApiKey) {
      // Return a highly realistic mock response to ensure usability when API Key is missing
      console.warn("GEMINI_API_KEY is not defined. Returning realistic mock evaluation.");
      return res.json({
        isMock: true,
        overallScore: 74,
        clarityScore: 76,
        pacingScore: 68,
        confidenceScore: 78,
        pacingWpm: 154,
        pacingAssessment: "Too Fast",
        primaryChallenge: "Syllable stress and 'v' vs 'w' distinction",
        strengths: [
          "Strong grammatical sentence construction",
          "Excellent natural vocabulary and engagement",
          "Clear vocal projection and pitch"
        ],
        challenges: [
          "Speaking too quickly (154 WPM) under pitch pressure",
          "Merging the 'v' and 'w' sounds (e.g. pronouncing 'very' like 'wery')",
          "Flat intonation at sentence endings instead of descending tone"
        ],
        pronunciationIssues: [
          {
            "word": "Value",
            "observation": "Pronounced with a 'w' sound starter.",
            "correction": "Bite your bottom lip gently with your upper teeth for a clean 'v' sound."
          },
          {
            "word": "Development",
            "observation": "Stressed the first syllable (DE-velopment).",
            "correction": "Stress the second syllable (de-VEL-opment) to match global neutral standards."
          }
        ],
        drillRecommendation: "The 'v' vs 'w' Lip-Teeth Drill (SpeakEase Guide 1, Page 12) & The Metronome Speed Clamp (Guide 2, Page 8)",
        coachingNote: "Your foundational English is excellent, but speaking at 154 WPM makes you sound rushed to Western clients, reducing perceived competence. By pacing down to 130 WPM and correcting syllable stress, you can command 15-20% higher project rates."
      });
    }

    const ai = getGeminiClient();

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        {
          inlineData: {
            data: audioBase64,
            mimeType: mimeType || "audio/webm",
          },
        },
        {
          text: `You are an expert vocal clarity coach specializing in helping Indian freelancers (Upwork, Fiverr, etc.) improve their speaking clarity, pronunciation, and pacing for US, UK, and Australian clients.

Analyze this voice recording and evaluate their vocal traits for a pitch.

Provide a comprehensive, highly professional, constructive Qoves-style report. Your response MUST be valid JSON matching this schema:
{
  "overallScore": number (1-100),
  "clarityScore": number (1-100),
  "pacingScore": number (1-100),
  "confidenceScore": number (1-100),
  "pacingWpm": number (estimated words per minute),
  "pacingAssessment": "Too Fast" | "Too Slow" | "Perfect Pacing",
  "primaryChallenge": "string (e.g. syllable stress, 'v' vs 'w' pronunciation, flat intonation)",
  "strengths": ["string", "string", "string"],
  "challenges": ["string", "string", "string"],
  "pronunciationIssues": [
    {
      "word": "string",
      "observation": "string",
      "correction": "string"
    }
  ],
  "drillRecommendation": "string (specific action mapping to SpeakEase Guide 01 or Guide 02)",
  "coachingNote": "string (a helpful, warm, encouraging but objective Qoves-style summary paragraph of their performance and potential pitch impact)"
}

Do not add any markdown framing outside the JSON itself.`,
        },
      ],
      config: {
        responseMimeType: "application/json",
      },
    });

    const textOutput = response.text || "{}";
    const cleanedText = textOutput.trim().replace(/^```json\s*/i, "").replace(/```\s*$/, "");
    const parsedData = JSON.parse(cleanedText);
    
    return res.json(parsedData);
  } catch (error: any) {
    console.error("Vocal evaluation endpoint error:", error);
    return res.status(500).json({ error: error?.message || "Internal evaluation error" });
  }
});

// Configure Vite or Static Assets based on environment
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

setupServer();
