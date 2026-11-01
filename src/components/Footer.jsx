
import { motion } from "framer-motion";
import { ArrowUp, Heart, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-purple-500/20 bg-[#0b0b14] px-6 py-12 sm:px-10">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        {/* Decorative icon */}
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300 shadow-lg shadow-purple-500/10"
        >
          <Code2 size={23} />
        </motion.div>

        {/* Name */}
        <h3 className="text-2xl font-extrabold text-white">
          Greeshma{" "}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            B.
          </span>
        </h3>

        <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
          Building meaningful digital experiences, one line of code at a time.
        </p>

        {/* Gradient divider */}
        <div className="my-8 h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Greeshma B. All rights reserved.
        </p>

        {/* Made with love */}
        <p className="mt-3 flex items-center gap-2 text-xs text-gray-600">
          Designed and developed with
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart size={13} className="fill-pink-500 text-pink-500" />
          </motion.span>
          using React
        </p>

        {/* Back to top */}
        <motion.a
          href="#home"
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 250, damping: 15 }}
          className="group mt-8 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-6 py-3 text-sm font-semibold text-purple-300 shadow-lg shadow-purple-500/5 transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-500/20 hover:shadow-purple-500/20"
        >
          Back to top
          <ArrowUp
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </motion.a>
      </div>
    </footer>
  );
}
