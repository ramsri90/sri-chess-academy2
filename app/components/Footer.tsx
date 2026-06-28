import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer-dark text-gray-400 py-10 px-5 text-center text-sm border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Sri Chess Academy. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-accent-purple transition-colors no-underline text-gray-400">
            Home
          </Link>
          <Link href="/#about" className="hover:text-accent-purple transition-colors no-underline text-gray-400">
            About
          </Link>
          <Link href="/#services" className="hover:text-accent-purple transition-colors no-underline text-gray-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-accent-purple transition-colors no-underline text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
