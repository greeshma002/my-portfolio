
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    ["2+", "Years Experience"],
    ["React.js", "Frontend"],
    ["MERN", "Full Stack"],
    ["REST APIs", "Integration"],
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      className="overflow-hidden bg-[#0b0b14] px-6 py-24 text-white lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* 3D Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ perspective: 1000 }}
          className="mb-14 text-center"
        >
          {/* Subtitle Badge */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 shadow-[0_5px_25px_rgba(168,85,247,0.15)]"
          >
            <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_#c084fc]" />
            <span className="text-sm font-semibold tracking-[0.2em] text-purple-300">
              ABOUT ME
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            whileHover={{ rotateX: 5, rotateY: -3, scale: 1.02 }}
            style={{ transformStyle: "preserve-3d" }}
            className="mx-auto max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_8px_15px_rgba(168,85,247,0.25)] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Creating{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(168,85,247,0.3)]">
              meaningful digital
            </span>{" "}
            experiences.
          </motion.h2>

          {/* Decorative underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          />
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* About Description */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-5 text-base leading-8 text-gray-400"
          >
            <motion.p variants={itemVariants}>
              I'm{" "}
              <strong className="font-semibold text-white">
                Greeshma B
              </strong>
              , a Full Stack Developer with 2+ years of experience
              developing modern web applications.
            </motion.p>

            <motion.p variants={itemVariants}>
              My experience includes enterprise applications,
              HRMS solutions, e-commerce platforms and digital
              marketing campaigns.
            </motion.p>

            <motion.p variants={itemVariants}>
              I enjoy creating reusable components, integrating
              APIs and building responsive user interfaces.
            </motion.p>
          </motion.div>

          {/* Statistics Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map(([value, label]) => (
              <motion.div
                key={label}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: -5,
                  scale: 1.03,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-gray-900/50 p-6 shadow-lg shadow-purple-900/5 transition-colors duration-300 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-900/20"
              >
                <h3 className="text-2xl font-bold text-purple-400 transition-colors duration-300 group-hover:text-purple-300 sm:text-3xl">
                  {value}
                </h3>

                <p className="mt-3 text-sm text-gray-400 sm:text-base">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
