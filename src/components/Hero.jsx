
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

import { personalInfo } from "../data/portfolioData";
import profilePic from "../assets/Greeshma.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-[#0b0b14] py-24 text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-lg font-medium text-purple-400">
            Hello, I'm
          </p>

          <h1 className="text-[clamp(3.5rem,8vw,6.5rem)] font-bold leading-[1.1] tracking-[-4px]">
            Greeshma{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              B.
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-200">
            {personalInfo.role}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
            {personalInfo.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-purple-400 px-6 py-3 font-semibold text-purple-300 transition duration-300 hover:-translate-y-1 hover:bg-purple-500/10"
            >
              Contact Me
            </a>
          </div>

          {/* Contact Details and Social Links */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-gray-400">

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send email"
              className="transition-colors hover:text-purple-400"
            >
              <Mail size={21} />
            </a>

            {/* Phone */}
            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Call phone"
              className="transition-colors hover:text-purple-400"
            >
              <Phone size={21} />
            </a>

            {/* Location */}
            <span className="flex items-center gap-2 text-sm">
              <MapPin size={18} className="text-purple-400" />
              {personalInfo.location}
            </span>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/greeshma-b-61bb00293/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-purple-400"
            >
              <Linkedin size={21} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/gree_shma.r_?rpxt=bGJleWQyMDdhb3pz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-pink-400"
            >
              <Instagram size={21} />
            </a>

          </div>
        </motion.div>

        {/* Right Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full max-w-md rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-gray-900 to-gray-950 p-7 text-center shadow-2xl shadow-purple-900/20"
        >

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-purple-500/40 shadow-xl shadow-purple-500/20 md:h-56 md:w-56"
          >
            <img
              src={profilePic}
              alt="Greeshma"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>

          {/* Introduction */}
          <h2 className="mt-8 text-3xl font-bold text-white">
            From UI to API.
          </h2>

          <p className="mt-3 text-gray-400">
            Frontend craft. Full-stack perspective.
          </p>

          {/* Core Technologies */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["React.js", "JavaScript", "Node.js", "MongoDB"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-200 transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-500/20"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>

          {/* Explore Skills CTA */}
          <motion.a
            href="#skills"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-9 flex items-center justify-center gap-3 rounded-xl border border-purple-400/30 bg-purple-500/10 px-5 py-4 transition-all duration-300 hover:border-purple-400/70 hover:bg-purple-500/20"
          >
            <div className="text-left">
              <p className="text-sm font-semibold text-white">
                Want to explore my skills?
              </p>

              <p className="mt-1 text-xs text-purple-300">
                Discover my complete tech stack
              </p>
            </div>

            <span className="text-xl text-purple-300 transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </motion.a>

          {/* Bottom Accent */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mx-auto mt-8 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-400"
          />

        </motion.div>

      </div>
    </section>
  );
}6