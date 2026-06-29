import { motion } from "motion/react";
import { Star, MessageSquare, Quote } from "lucide-react";

interface FeedbackItem {
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  initials: string;
  avatarBg: string;
}

const FEEDBACKS: FeedbackItem[] = [
  {
    name: "Rohan Mehta",
    role: "Full-Stack Developer",
    location: "Bengaluru, India",
    text: "I used to speak so quickly during Zoom calls that US clients constantly asked me to repeat myself. After practicing the 130 WPM speed clamp drill for a week, they follow me effortlessly. Just closed a $4,000/month retainer.",
    rating: 5,
    initials: "RM",
    avatarBg: "bg-blue-900/40 text-blue-300"
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    location: "Mumbai, India",
    text: "The syllable stress patterns in the main guide were an absolute eye-opener. I didn't realize how much regional Indian English stresses different vowels compared to Western standard standards. Extremely practical advice.",
    rating: 5,
    initials: "PS",
    avatarBg: "bg-emerald-900/40 text-emerald-300"
  },
  {
    name: "Amit Patel",
    role: "DevOps Consultant",
    location: "Hyderabad, India",
    text: "The 'V' versus 'W' split drill corrected a pronunciation habit I had for over ten years. Clients now perceive me as a senior consultant rather than just an offshore developer. Well worth the ₹399.",
    rating: 5,
    initials: "AP",
    avatarBg: "bg-amber-900/40 text-amber-300"
  }
];

export default function Feedbacks() {
  return (
    <section 
      id="testimonials"
      className="py-24 bg-[#111111] border-t border-b border-white/5 relative overflow-hidden px-6 md:px-12"
    >
      {/* Subtle glowing orbs in background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-[#8A9BAE]/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-4">
            <MessageSquare size={13} className="text-[#8A9BAE]" />
            <span className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#8A9BAE]">
              Client Feedback
            </span>
          </div>
          
          <h2 className="font-serif text-3.5xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Realistic feedback from active <span className="text-[#8A9BAE] italic">Indian freelancers</span>
          </h2>
          
          <p className="font-sans text-sm md:text-base text-neutral-400">
            Real outcomes. No fake reviews, just honest stories of professional growth and communication breakthroughs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEEDBACKS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1A1A] border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-white/10 transition-all group"
            >
              <div>
                {/* Stars and quote icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 stroke-none" />
                    ))}
                  </div>
                  <Quote size={20} className="text-[#8A9BAE]/20 group-hover:text-[#8A9BAE]/40 transition-colors" />
                </div>

                {/* Testimonial Text */}
                <p className="font-sans text-neutral-300 text-sm md:text-base leading-relaxed mb-8">
                  "{item.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-sans font-bold text-xs shrink-0 ${item.avatarBg}`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-sans text-sm font-semibold text-white">
                    {item.name}
                  </h4>
                  <p className="font-sans text-[11px] text-[#8A9BAE]">
                    {item.role} • <span className="text-neutral-500">{item.location}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
