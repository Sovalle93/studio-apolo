'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedin} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#272e80] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <div className="text-sm text-white opacity-90">
            © Studio Apolo - Derechos reservados 2025
          </div>

          {/* Middle - Social Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.instagram.com/studioapolo.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/company/studio-apolo-cl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Right - Contact Link */}
          <Link 
            href="/contact" 
            className="text-white hover:underline underline-offset-4 transition-all whitespace-nowrap"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </footer>
  );
}
