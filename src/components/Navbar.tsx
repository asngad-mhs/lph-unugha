import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Shield, BookOpen, Phone, MapPin, Mail, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Layanan', href: '#services' },
    { name: 'Alur Proses', href: '#process' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src="https://drive.google.com/uc?export=view&id=1iN-VpUPUB_dSFtZbRqxCDbpWYM1h4Bpp" 
              alt="Logo LPH UNUGHA" 
              className="h-16 w-auto object-contain group-hover:opacity-90 transition-opacity" 
            />
            <div>
              <h1 className={`font-serif font-bold text-xl leading-none ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
                LPH UNUGHA
              </h1>
              <p className={`text-xs font-sans ${isScrolled ? 'text-slate-600' : 'text-slate-600 lg:text-white/80'}`}>
                Lembaga Pemeriksa Halal
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-unugha-gold ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-unugha-green text-white text-sm font-medium rounded-full hover:bg-green-800 transition-colors shadow-lg shadow-green-900/20"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-base font-medium text-slate-700 hover:text-unugha-green"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full text-center px-5 py-3 bg-unugha-green text-white font-medium rounded-lg hover:bg-green-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Daftar Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
