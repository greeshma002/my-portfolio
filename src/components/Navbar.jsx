
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

 const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Beyond the Code", href: "#beyond" },
  { name: "Contact", href: "#contact" },
];
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0b0b14]/90 shadow-lg shadow-black/10 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-white transition hover:text-purple-400"
        >
          GB<span className="text-purple-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
         {links.map((link) => (
  <a
    key={link.name}
    href={link.href}
    className="text-sm font-medium text-gray-300 transition duration-300 hover:text-purple-400"
  >
    {link.name}
  </a>
))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-gray-300 transition hover:bg-purple-500/10 hover:text-purple-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#11111d] transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
         {links.map((link) => (
  <a
    key={link.name}
    href={link.href}
    onClick={() => setOpen(false)}
    className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-purple-500/10 hover:text-purple-400"
  >
    {link.name}
  </a>
))}
        </div>
      </div>

    </nav>
  );
}
