
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  Globe,
  Briefcase,
  Sparkles,
} from "lucide-react";
import { skills } from "../data/portfolioData";

const icons = [Code2, Layers, Database, Globe, Briefcase, Sparkles];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    rotateX: 12,
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

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
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
            MY EXPERTISE
          </motion.div>

          <motion.h2
            whileHover={{ rotateX: 5, rotateY: -3, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.25)]">
              Skills
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
            The technologies and tools I use to build responsive,
            scalable, and engaging digital experiences.
          </p>
        </motion.div>

        {/* Skill cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: 1200 }}
        >
          {skills.map((skill, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={skill.title}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  rotateX: 4,
                  rotateY: index % 2 === 0 ? 3 : -3,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 16,
                }}
                className="group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#11111f]/80 p-7 shadow-xl shadow-purple-950/20 backdrop-blur-xl transition-all duration-500 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10 sm:p-8"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Top gradient line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/20 to-pink-500/10 text-purple-300 shadow-lg shadow-purple-500/10"
                >
                  <Icon size={30} strokeWidth={1.8} />
                </motion.div>

                {/* Category title */}
                <h3 className="mt-6 text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300 sm:text-2xl">
                  {skill.title}
                </h3>

                {/* Skill tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: itemIndex * 0.04,
                      }}
                      whileHover={{ y: -3, scale: 1.06 }}
                      className="rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-3 py-2 text-sm text-purple-200 transition-colors duration-300 hover:border-purple-400/50 hover:bg-purple-500/20"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-16 h-40 w-40 rounded-full bg-purple-600/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
