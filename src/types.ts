export interface VocalReport {
  isMock?: boolean;
  overallScore: number;
  clarityScore: number;
  pacingScore: number;
  confidenceScore: number;
  pacingWpm: number;
  pacingAssessment: "Too Fast" | "Too Slow" | "Perfect Pacing";
  primaryChallenge: string;
  strengths: string[];
  challenges: string[];
  pronunciationIssues: {
    word: string;
    observation: string;
    correction: string;
  }[];
  drillRecommendation: string;
  coachingNote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GuideBook {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  bullets: string[];
  chapters: {
    title: string;
    description: string;
    content: string; // Real full content the user can browse when unlocked!
  }[];
}
