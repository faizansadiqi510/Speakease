import { motion } from "motion/react";
import { Briefcase, Landmark, Rocket, UserCheck } from "lucide-react";

export default function WhoItsFor() {
  const cards = [
    {
      id: "1",
      title: "Freelancer on Upwork or Fiverr",
      description: "You target US/UK/AU clients and lose high-ticket contract pitches simply because of syllable stress slips or rushing your speaking pace.",
      icon: Briefcase,
      badge: "REMOTE FREELANCERS"
    },
    {
      id: "2",
      title: "Sales Professional",
      description: "You close deals on international calls but feel self-conscious or struggle to make a robust, polished impact under pressure.",
      icon: Landmark,
      badge: "SALES & OUTREACH"
    },
    {
      id: "3",
      title: "Founder or Entrepreneur",
      description: "You pitch your startup to international venture capitals, investors, or partners and need absolute structural confidence.",
      icon: Rocket,
      badge: "FOUNDERS & LEADERS"
    },
    {
      id: "4",
      title: "Working Professional",
      description: "You want to sound polished, articulate, and clear on global team standups and video presentations without sounding fake or forced.",
      icon: UserCheck,
      badge: "GLOBAL CAREERISTS"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-100/50 border-t border-[#C8CDD4]/15">
      <div className="max-w-7xl mx-auto">
        
        {/* Eyebrow Label */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#C8CDD4] bg-white text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#8A9BAE]">
            BUILT FOR YOU IF...
          </span>
        </div>

        {/* Two-Tone Headline */}
        <h2 className="text-center font-serif text-3xl md:text-5xl font-semibold tracking-tight text-[#0D0D0D] mb-16 leading-tight max-w-3xl mx-auto">
          Taking into <span className="text-[#8A9BAE] italic font-normal">account your situation...</span>
        </h2>

        {/* Grid of 4 White Cards, rounded corners (16px), thumbnail layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-[#C8CDD4]/15 p-6 flex items-start gap-5 hover:border-[#8A9BAE]/30 transition-all shadow-sm group"
              >
                {/* Thumbnail Icon Left */}
                <div className="w-12 h-12 rounded-xl bg-[#F4F5F7] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors duration-200 flex items-center justify-center text-[#8A9BAE] shrink-0">
                  <Icon size={20} />
                </div>

                {/* Content Right */}
                <div className="space-y-1.5">
                  <span className="font-mono text-[9px] font-bold text-[#8A9BAE] uppercase tracking-widest">
                    {card.badge}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#0D0D0D]">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-[#0D0D0D]/75 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
