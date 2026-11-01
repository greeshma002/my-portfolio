
import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";
import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-pink-600/10 blur-[120px]" />

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
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold tracking-widest text-purple-300 shadow-lg shadow-purple-500/10"
          >
            <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7]" />
            CAREER JOURNEY
          </motion.div>

          <motion.h2
            whileHover={{ rotateX: 5, rotateY: -3, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.25)]">
              Experience
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          />
        </motion.div>

        {/* Experience cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
          style={{ perspective: 1200 }}
        >
          {experience.map((job, index) => (
            <motion.article
              key={job.company}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotateX: 2,
                rotateY: index % 2 === 0 ? 1 : -1,
                scale: 1.01,
              }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#11111f]/80 p-6 shadow-xl shadow-purple-950/20 backdrop-blur-xl transition-colors duration-500 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10 sm:p-9"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card gradient accent */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    {job.duration}
                  </p>

                  <h3 className="mt-5 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300 sm:text-3xl">
                    {job.role}
                  </h3>

                  <p className="mt-2 text-base text-gray-400">
                    <span className="font-semibold text-gray-200">
                      {job.company}
                    </span>
                    <span className="mx-2 text-purple-400">·</span>
                    {job.location}
                  </p>
                </div>

                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/20 to-pink-500/10 text-purple-300 shadow-lg shadow-purple-500/10 sm:flex"
                >
                  <BriefcaseBusiness size={25} />
                </motion.div>
              </div>

              {/* Projects */}
              <div className="mt-7">
                <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gray-500">
                  PROJECTS & PLATFORMS
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.projects.map((project) => (
                    <motion.span
                      key={project}
                      whileHover={{ y: -3, scale: 1.04 }}
                      className="rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2 text-sm text-purple-200 transition-colors duration-300 hover:border-purple-400/50 hover:bg-purple-500/20"
                    >
                      {project}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-5 text-xs font-bold tracking-[0.2em] text-gray-500">
                  KEY RESPONSIBILITIES
                </p>

                <ul className="space-y-4">
                  {job.responsibilities.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.08 }}
                      className="flex items-start gap-3 text-sm leading-7 text-gray-400 transition-colors duration-300 hover:text-gray-200 sm:text-base"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-purple-300">
                        <ArrowUpRight size={14} />
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Bottom hover glow */}
              <div className="pointer-events-none absolute -bottom-24 -right-20 h-48 w-48 rounded-full bg-purple-600/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
