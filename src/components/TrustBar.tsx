import { motion } from "motion/react";

export default function TrustBar() {
  const freelancersPlatform = [
    { name: "Upwork", url: "#" },
    { name: "Fiverr", url: "#" },
    { name: "Toptal", url: "#" },
    { name: "LinkedIn", url: "#" }
  ];

  return (
    <div className="bg-[#EBECEF] border-y border-[#C8CDD4]/20 py-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
        <span className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#8A9BAE] text-center md:text-left">
          Used by successful freelancers on
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {freelancersPlatform.map((platform, idx) => (
            <motion.span
              key={platform.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="font-serif text-lg md:text-xl font-semibold tracking-wide text-[#0D0D0D] hover:opacity-100 transition-opacity"
            >
              {platform.name}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
