
import { motion } from "framer-motion";
import { achievements } from "../data/portfolioData";
import { Award, Sparkles, Star } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    rotateX: 10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-pink-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 35, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
          style={{ perspective: 1000 }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold tracking-widest text-purple-300 shadow-lg shadow-purple-500/10"
          >
            <Sparkles size={15} />
            RECOGNITION
          </motion.div>

          <motion.h2
            whileHover={{ rotateX: 5, rotateY: -3, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.25)]">
              Achievements
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            A few milestones and recognitions that reflect my dedication,
            teamwork, and continuous learning.
          </p>
        </motion.div>

        {/* Achievement cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:grid-cols-2"
          style={{ perspective: 1200 }}
        >
          {achievements.map((item, index) => (
            <motion.article
              key={item}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotateX: 3,
                rotateY: index % 2 === 0 ? 2 : -2,
                scale: 1.015,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 16,
              }}
              className="group relative flex items-start gap-5 overflow-hidden rounded-3xl border border-purple-500/20 bg-[#11111f]/80 p-6 shadow-xl shadow-purple-950/20 backdrop-blur-xl transition-all duration-500 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10 sm:p-8"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Top gradient line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Award icon */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.12 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/20 to-pink-500/10 text-purple-300 shadow-lg shadow-purple-500/10"
              >
                <Award size={27} strokeWidth={1.8} />
              </motion.div>

              {/* Achievement text */}
              <div className="relative z-10 flex-1">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-purple-400">
                  <Star size={13} />
                  RECOGNITION 0{index + 1}
                </div>

                <p className="text-base leading-7 text-gray-300 transition-colors duration-300 group-hover:text-white sm:text-lg">
                  {item}
                </p>
              </div>

              {/* Decorative number */}
              <div className="pointer-events-none absolute -bottom-5 -right-1 text-7xl font-black text-white/[0.025]">
                0{index + 1}
              </div>

              {/* Bottom glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-16 h-40 w-40 rounded-full bg-purple-600/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
