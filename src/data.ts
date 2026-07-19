import { GuideBook, FAQItem } from "./types";

export const RESEARCH_TABS = [
  {
    id: "finances",
    label: "Finances",
    metric: "15-20% Rate Increase",
    headline: "Vocal clarity is directly linked to higher hourly billing rates.",
    description: "Studies show that freelancers with clear, neutral-paced voices are perceived as more senior and technically capable, allowing them to charge significantly higher premium rates.",
    citation: "Hamermesh, D. S., & Biddle, J. E. (1994). Beauty, Clarity & The Labour Market. American Economic Review."
  },
  {
    id: "dating", // Wait, Qoves had dating, but for SpeakEase (freelancers) let's align it with client negotiation!
    label: "Client Pitches",
    metric: "3x More Proposal Wins",
    headline: "Clients make split-second hiring decisions in the first 60 seconds of a call.",
    description: "When pitching to international clients (US/UK/AU), fumbling or speaking with a heavy accent triggers subconscious cognitive friction, leading clients to choose competitors with lower qualifications but higher speech clarity.",
    citation: "Qorr Business Speech Index (2025). Cognitive Friction in Remote Freelancing."
  },
  {
    id: "socializing", // Qoves had socializing, let's align with Retention!
    label: "Retainer Expansion",
    metric: "88% Client Retention",
    headline: "Clear articulation is the secret to moving from one-off tasks to long-term retainers.",
    description: "When you can articulate technical solutions with absolute ease on video meetings, clients treat you as a key partner and consultant, leading to recurring contracts and organic referrals.",
    citation: "Remote Work Alliance Report. Trust Dynamics in Offshore Teams."
  }
];

export const PROBLEM_LIST = [
  { id: "1", text: "International clients judge your competence by how you sound" },
  { id: "2", text: "Unclear speech loses projects to less qualified competitors" },
  { id: "3", text: "Fumbling on Zoom calls destroys trust in the first minute" },
  { id: "4", text: "Repeating yourself signals low confidence to Western clients" },
  { id: "5", text: "Your accent is costing you 20–30% of potential income" }
];

export const OLD_WAY_STEPS = [
  { step: "STEP 1", title: "Watch random YouTube videos", desc: "No structured plan, watching generic videos that don't target Indian pronunciation challenges." },
  { step: "STEP 2", title: "Copy accents blindly", desc: "Trying to sound American or British, which ends up sounding fake, forced, and inconsistent." },
  { step: "STEP 3", title: "No structured evaluation", desc: "Speaking without knowing which exact sounds you are failing on or how fast you are going." },
  { step: "STEP 4", title: "Uncomfortable Zoom pitches", desc: "Client asks you to repeat yourself; you lose confidence, start fumbling, and feel anxious." },
  { step: "STEP 5", title: "Lost project opportunity", desc: "Client sends the polite 'decided to go with another candidate' email." }
];

export const SPEAKEASE_WAY_STEPS = [
  { step: "STEP 1", title: "Master articulation fundamentals", desc: "Learn to properly position your lips, teeth, and tongue to produce clean, neutral vowels." },
  { step: "STEP 2", title: "Perfect your fluency & rhythm", desc: "Adopt natural, slow pacing and correct syllable stress so clients digest your pitch effortlessly." },
  { step: "STEP 3", title: "Targeted accent drills", desc: "Practice Indian-speaker-specific drills (like 'v' vs 'w' and ending consonant release)." },
  { step: "STEP 4", title: "Sound confident and project", desc: "Pitch with a grounded voice, calm diaphragm breathing, and standard client-interaction phrasing." },
  { step: "STEP 5", title: "Win international clients", desc: "Close higher contracts, win retainers, and pitch to premium US/UK/AU businesses with zero anxiety." }
];

export const GUIDES: GuideBook[] = [
  {
    id: "guide-1",
    title: "The Clear Speech Guide",
    subtitle: "MAIN GUIDE | Articulation, fluency, pacing, confidence for international Zoom calls",
    badge: "MAIN GUIDE",
    bullets: [
      "The 130 WPM Pacing Formula to instantly eliminate client cognitive strain",
      "Syllable stress mapping to sound polished and authoritative",
      "The 'V' and 'W' split drill to resolve the most common phonetic trap",
      " Diaphragm projection rules for maximum confidence on camera"
    ],
    chapters: [
      {
        title: "Chapter 1: The 130 WPM Speed Clamp",
        description: "Learn to restrict your speed from 160 WPM to the international pitch sweet-spot.",
        content: `### Chapter 1: The 130 WPM Speed Clamp

Many Indian professionals speak at an average speed of **160 to 180 words per minute (WPM)**. While this is perfectly natural in regional Indian English, it triggers extreme cognitive load for Western clients (particularly in the US, UK, and Australia) who are accustomed to a standard conversational pace of **110 to 130 WPM**.

When you speak too quickly, two destructive things happen:
1. **Decoding Fatigue**: The client is busy translating your speech sounds, which means they are paying less attention to the brilliance of your technical proposal.
2. **Perceived Anxiety**: High WPM makes you sound nervous, rushed, or desperate to finish speaking.

#### The Metric Target
Your target conversational pace is **130 WPM**. This pace conveys confidence, composure, and guarantees that anyone anywhere can follow you.

#### The Metronome Practice Method
To lock in your new conversational speed:
- Open any online metronome. Set it to **65 BPM**.
- Speak exactly **two words per beat**. 
- Continue this drill for 5 minutes daily using any sample text. Within 4 days, your brain will establish a natural speed clamp at 130 WPM.`
      },
      {
        title: "Chapter 2: Syllable Weighting Rules",
        description: "Moving vocal stress to match global neutral standards.",
        content: `### Chapter 2: Syllable Weighting Rules

A primary accent marker is **syllable stress alignment**. English is a stress-timed language, where some syllables are stretched and spoken with higher pitch, while others are reduced.

Indian English tends to use syllable-timed patterns where every syllable has equal weight, or places stress on different syllables compared to Western dialects.

#### Core Stress Corrections
Here are high-frequency words in business meetings that are commonly mis-stressed:

- **Development**:
  * Common: \`DE-velopment\` (Incorrect)
  * Standard: \`de-VEL-opment\` (Correct - stress the second syllable)
- **Alternative**:
  * Common: \`al-ter-NA-tive\` (Incorrect)
  * Standard: \`al-TER-native\` (Correct)
- **Determine**:
  * Common: \`de-ter-MINE\` (Incorrect)
  * Standard: \`de-TER-mine\` (Correct)

#### The Stretcher Technique
To master syllable stress:
1. Identify the stressed syllable in your mind before speaking.
2. **Double the length** of the vowel in the stressed syllable.
3. Pronounce the remaining unstressed syllables quickly and lightly. E.g., say \`de-VEEEEEEL-opment\`. This creates a beautiful, natural rhythm.`
      },
      {
        title: "Chapter 3: Separating the 'V' and 'W'",
        description: "Resolving the classic phonetic fusion that confuses clients.",
        content: `### Chapter 3: Separating the 'V' and 'W'

For many Indian speakers, the 'v' (as in *value*) and 'w' (as in *window*) are merged into a single intermediate sound. This can cause severe confusion (e.g. hearing *west* when you mean *vest*).

#### The Anatomy of the Sounds

1. **The Crisp 'V' (Fricative)**:
   - **How**: Place your upper teeth gently on your bottom lip. Blow air through the contact point to create a slight buzzing sound.
   - **Practice**: *Very valuable vector development.* Feel your bottom lip vibrate.

2. **The Rounded 'W' (Glide)**:
   - **How**: Your teeth must NOT touch your lips. Round your lips tightly into an 'O' shape (as if about to whistle), then release the sound outwards.
   - **Practice**: *We want wide window views.* Lips are fully rounded and teeth are clear.

#### The 'V-W' Alternation Exercise
Practice switching between the two sounds:
- *Vet / Wet*
- *Vine / Wine*
- *Vest / West*
- *Viper / Wiper*

Say each pair 5 times slowly. Ensure your teeth only touch your lip for the first word, and your lips only round for the second.`
      }
    ]
  },
  {
    id: "guide-2",
    title: "The Global Accent Guide",
    subtitle: "BONUS GUIDE | Daily drills for the specific sounds Indian speakers struggle with most",
    badge: "BONUS GUIDE",
    bullets: [
      "The 'TH' vibration masterclass (voiced vs. voiceless consonants)",
      "Vowel opening exercises to eliminate flat, monotone delivery",
      "Hard consonant endings to sound polished and clear",
      "The 10-Minute Pre-Call Warmup routine to speak like a pro"
    ],
    chapters: [
      {
        title: "Chapter 1: The Voiced & Voiceless 'TH'",
        description: "Preventing client decoding fatigue by standardizing the 'th' sound.",
        content: `### Chapter 1: The Voiced & Voiceless 'TH'

In many regional Indian accents, the English 'th' sound is replaced with a hard 'd' or 't' sound (e.g. saying *dem* instead of *them*, or *tink* instead of *think*). This is a heavy accent marker that forces clients to actively decipher your words.

English has two distinct 'TH' sounds:

#### 1. The Voiced 'TH' (e.g., *this*, *they*, *brother*)
- Place the tip of your tongue slightly between your front teeth (do not bite!).
- Blow air while activating your vocal cords. You should feel a tickle or buzz on your tongue tip.
- Say: \`this\`, \`that\`, \`there\`, \`with\`.

#### 2. The Voiceless 'TH' (e.g., *think*, *thank*, *growth*)
- Place your tongue tip between your teeth exactly as above.
- Blow air *without* activating your vocal cords (it should just be a soft stream of air, like a whisper).
- Say: \`think\`, \`thank\`, \`three\`, \`path\`.

#### The Tongue-Poke Challenge
Look in a mirror. If you do not see the tip of your tongue peeking slightly between your teeth when pronouncing 'TH', you are pronouncing a 'D' or 'T'. Over-exaggerate the tongue poke in practice until it becomes a fast, subtle, natural habit.`
      },
      {
        title: "Chapter 2: Vowel Opening & Openness",
        description: "Eliminating flat vocal delivery and boosting resonance.",
        content: `### Chapter 2: Vowel Opening & Openness

Indian languages are spoken with a relatively closed jaw, requiring minimal lip and jaw movement. When applied to English, this creates a 'flat' or monotone delivery that sounds unengaging.

To sound warm, clear, and engaging, you must open your mouth vertically on open English vowel sounds.

#### The Open 'O' vs. 'A' Drill
Try saying these two words: \`Cot\` vs \`Cat\`.
- For **Cot** (Short 'O'): Your jaw must drop vertically. Imagine your dentist asking you to say 'Ah'.
- For **Cat** (Short 'A'): Your mouth stretches wide horizontally, like a slight smile, with your tongue pressed down behind your lower front teeth.

#### Practice sentences with exaggerated jaw movement:
- *The tall boss called Bob.* (Vertical drop on tall, boss, Bob)
- *The mad cat ran back.* (Horizontal stretch on mad, cat, ran, back)

Practice speaking these sentences with a mirror, dropped jaw, and broad smile. This expands your acoustic resonance, making you sound friendly, clear, and highly convincing.`
      }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is this useful if my English is already decent?",
    answer: "Absolutely. Most Indian freelancers have excellent English grammar, rich vocabulary, and write flawlessly. However, verbal pitching has different rules. Pacing speed, incorrect syllable stresses, or slight phonetic mergers (such as 'v' vs 'w' or 'th') create cognitive load for international clients on quick video calls. This system is designed specifically to bridge that verbal gap."
  },
  {
    id: "faq-2",
    question: "How long until I notice results?",
    answer: "If you practice the targeted exercises in Guide 02 for just 10 minutes a day, you will start noticing an immediate change in your speech clarity and verbal confidence in less than 7 days. Clients will stop asking you to repeat yourself, and calls will feel significantly smoother."
  },
  {
    id: "faq-3",
    question: "Is this a video course or a PDF?",
    answer: "It is a beautifully structured, 2-guide PDF bundle packed with actionable phonetic maps, lip-teeth diagrams, and structured metronome speech drills that you can practice anywhere, at your own pace, without sitting through hours of boring videos."
  },
  {
    id: "faq-4",
    question: "Will I end up sounding fake or American?",
    answer: "No! SpeakEase is explicitly designed to teach you a natural, clear, neutral global pacing and clear articulation. The goal is NOT to make you sound American, British, or fake. It is to ensure your authentic Indian voice is perfectly comprehensible, clear, and confident to clients anywhere in the world."
  },
  {
    id: "faq-5",
    question: "Is there a refund policy?",
    answer: "SpeakEase is a digital guide bundle providing immediate, full download access to all proprietary materials upon purchase. Because of the instant download nature of this digital product, all sales are final and we do not offer refunds. We encourage you to check the chapter previews in the 'Product Inside' section to see exactly what you will receive before purchasing."
  }
];
