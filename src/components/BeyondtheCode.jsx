
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Camera,
  X,
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Replace these sample image URLs with your own photos.
const memories = [
  {
    id: 1,
    title: "Office Moments",
    category: "Work & Office",
    year: "2025",
    description: "Little moments from my professional journey.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
    size: "tall",
  },
  {
    id: 2,
    title: "Better Together",
    category: "Team & Friends",
    year: "2025",
    description: "Great people make every journey special.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900",
    size: "normal",
  },
  {
    id: 3,
    title: "Celebrating Moments",
    category: "Events & Celebrations",
    year: "2024",
    description: "Celebrating milestones and unforgettable memories.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900",
    size: "normal",
  },
  {
    id: 4,
    title: "A Change of Scenery",
    category: "Travel & Adventures",
    year: "2025",
    description: "Exploring new places and collecting memories.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    size: "tall",
  },
  {
    id: 5,
    title: "Little Things I Love",
    category: "Hobbies & Personal Life",
    year: "2026",
    description: "Finding inspiration in the little things.",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=900",
    size: "normal",
  },
  {
    id: 6,
    title: "Behind the Screen",
    category: "Coding & Behind the Scenes",
    year: "2026",
    description: "Coffee, code, creativity and continuous learning.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    size: "normal",
  },
  {
    id: 7,
    title: "Team Energy",
    category: "Team & Friends",
    year: "2024",
    description: "Learning, sharing and growing together.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900",
    size: "normal",
  },
  {
    id: 8,
    title: "The Journey",
    category: "Travel & Adventures",
    year: "2024",
    description: "Every journey has a story worth remembering.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900",
    size: "tall",
  },
  {
    id: 9,
    title: "Creative Inspiration",
    category: "Hobbies & Personal Life",
    year: "2025",
    description: "Making time for creativity outside of work.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900",
    size: "normal",
  },
];

const categories = [
  "All",
  "Work & Office",
  "Team & Friends",
  "Events & Celebrations",
  "Travel & Adventures",
  "Hobbies & Personal Life",
  "Coding & Behind the Scenes",
];

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    transition: { duration: 0.2 },
  },
};

export default function BeyondTheCode() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredMemories =
    activeCategory === "All"
      ? memories
      : memories.filter(
          (memory) => memory.category === activeCategory
        );

  const selectedIndex = memories.findIndex(
    (memory) => memory.id === selectedPhoto?.id
  );

  const showPrevious = () => {
    const previousIndex =
      (selectedIndex - 1 + memories.length) % memories.length;
    setSelectedPhoto(memories[previousIndex]);
  };

  const showNext = () => {
    const nextIndex = (selectedIndex + 1) % memories.length;
    setSelectedPhoto(memories[nextIndex]);
  };

  return (
    <section
      id="beyond"
      className="relative overflow-hidden bg-[#0b0b14] px-6 py-24 sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-40 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-80 w-80 rounded-full bg-pink-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 12 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
          style={{ perspective: 1000 }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold tracking-widest text-purple-300"
          >
            <Camera size={15} />
            BEYOND THE CODE
          </motion.div>

          <motion.h2
            whileHover={{ rotateX: 4, rotateY: -2, scale: 1.02 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            Life in{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Moments.
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          />

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            A little glimpse into the person behind the developer.
            From workdays and team memories to adventures and little
            things that make life beautiful.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "border-purple-400 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20"
                  : "border-purple-500/20 bg-[#11111f] text-gray-400 hover:border-purple-400/50 hover:text-purple-300"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Photo count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-medium tracking-wider text-gray-500">
            {activeCategory === "All"
              ? "ALL MEMORIES"
              : activeCategory.toUpperCase()}
          </p>
          <p className="text-sm text-purple-300">
            {filteredMemories.length} moments
          </p>
        </div>

        {/* Masonry gallery */}
        <motion.div
          layout
          className="columns-1 gap-5 sm:columns-2 lg:columns-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredMemories.map((memory, index) => (
              <motion.article
                key={memory.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
                whileHover={{
                  y: -7,
                  rotateX: 2,
                  scale: 1.015,
                }}
                onClick={() => setSelectedPhoto(memory)}
                className="group relative mb-5 cursor-pointer break-inside-avoid overflow-hidden rounded-3xl border border-purple-500/20 bg-[#11111f] shadow-xl shadow-purple-950/20 transition-all duration-500 hover:border-purple-400/50 hover:shadow-purple-500/10"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    memory.size === "tall"
                      ? "h-[420px]"
                      : "h-[290px]"
                  }`}
                >
                  <img
                    src={memory.image}
                    alt={memory.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090711] via-black/10 to-transparent opacity-90" />

                  {/* Hover icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md"
                  >
                    <ArrowUpRight size={19} />
                  </motion.div>

                  {/* Caption */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="mb-2 text-xs font-semibold tracking-widest text-purple-300">
                      {memory.category.toUpperCase()} · {memory.year}
                    </p>

                    <h3 className="text-xl font-bold text-white">
                      {memory.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-300">
                      {memory.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <Sparkles
            size={25}
            className="mx-auto mb-5 text-purple-400"
          />

          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            More than just{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              lines of code.
            </span>
          </h3>

          <p className="mt-4 text-gray-400">
            Every picture holds a story. Every moment is part of my journey.
          </p>
        </motion.div>
      </div>

      {/* Image lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-purple-400/30 bg-[#11111f] shadow-2xl shadow-purple-950/40"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close image"
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-purple-600"
              >
                <X size={21} />
              </button>

              {/* Previous */}
              <button
                onClick={showPrevious}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-purple-600 sm:left-5"
              >
                <ChevronLeft size={23} />
              </button>

              {/* Next */}
              <button
                onClick={showNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:bg-purple-600 sm:right-5"
              >
                <ChevronRight size={23} />
              </button>

              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[65vh] w-full bg-black object-contain"
              />

              <div className="p-6 sm:p-8">
                <p className="text-xs font-bold tracking-widest text-purple-400">
                  {selectedPhoto.category.toUpperCase()} · {selectedPhoto.year}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {selectedPhoto.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {selectedPhoto.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
