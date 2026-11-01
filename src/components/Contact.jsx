
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Send,
} from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email Address",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-pink-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative grid gap-12 overflow-hidden rounded-[2rem] border border-purple-500/20 bg-[#11111f]/85 p-7 shadow-2xl shadow-purple-950/30 backdrop-blur-xl sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14"
          style={{ perspective: 1200 }}
        >
          {/* Top gradient accent */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative z-10"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold tracking-widest text-purple-300 shadow-lg shadow-purple-500/10"
            >
              <Sparkles size={15} />
              GET IN TOUCH
            </motion.div>

            <motion.h2
              whileHover={{ rotateX: 3, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 180, damping: 12 }}
              className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              Let's build something{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                meaningful.
              </span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 90 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-7 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
            />

            <p className="mt-8 max-w-lg text-base leading-8 text-gray-400 sm:text-lg">
              Open to exciting opportunities, collaborations and
              conversations about web development. Have an idea or
              opportunity in mind? I'd love to hear from you.
            </p>

            {/* Availability note */}
            <div className="mt-9 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-400" />
              </span>
              <span className="text-sm text-gray-400">
                Open to opportunities and collaborations
              </span>
            </div>
          </motion.div>

          {/* Right contact details */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative z-10 flex flex-col justify-center gap-5"
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{
                    x: 7,
                    scale: 1.02,
                    rotateY: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 16,
                  }}
                  className="group flex items-center gap-4 rounded-2xl border border-purple-500/15 bg-purple-500/[0.05] p-5 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/[0.10] hover:shadow-lg hover:shadow-purple-500/10 sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-500/20 to-pink-500/10 text-purple-300 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                      {item.label}
                    </p>
                    <p className="mt-2 break-all text-sm font-medium text-gray-200 transition-colors group-hover:text-purple-300 sm:text-base">
                      {item.value}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300"
                  />
                </motion.a>
              );
            })}

            {/* Location */}
            <motion.div
              whileHover={{ x: 7, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
              className="flex items-center gap-4 rounded-2xl border border-purple-500/15 bg-purple-500/[0.05] p-5 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/[0.10] hover:shadow-lg hover:shadow-purple-500/10 sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-500/20 to-pink-500/10 text-purple-300">
                <MapPin size={22} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Location
                </p>
                <p className="mt-2 text-sm font-medium text-gray-200 sm:text-base">
                  {personalInfo.location}
                </p>
              </div>
            </motion.div>

            {/* Email button */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{
                y: -5,
                scale: 1.03,
                boxShadow: "0px 12px 35px rgba(168,85,247,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="mt-3 inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-7 py-4 font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300"
            >
              <Send size={18} />
              Send an Email
              <ArrowUpRight size={19} />
            </motion.a>
          </motion.div>

          {/* Decorative bottom glow */}
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />
        </motion.div>
      </div>
    </section>
  );
}
