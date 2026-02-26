import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-3 inline-flex group">
              <img 
                src="/logo-placeholder.svg" 
                alt="Logo LPH UNUGHA" 
                className="h-12 w-auto object-contain bg-white rounded-lg p-1 group-hover:opacity-90 transition-opacity" 
              />
              <div>
                <h3 className="font-serif font-bold text-xl group-hover:text-unugha-gold transition-colors">LPH UNUGHA</h3>
                <p className="text-xs text-slate-400">Universitas Nahdlatul Ulama Al Ghazali</p>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Mitra terpercaya dalam sertifikasi halal. Kami berkomitmen menjaga kehalalan produk untuk kemaslahatan umat.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-unugha-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-unugha-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-unugha-green transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-unugha-gold transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-unugha-gold transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-unugha-gold transition-colors">Layanan</a></li>
              <li><a href="#process" className="hover:text-unugha-gold transition-colors">Alur Sertifikasi</a></li>
              <li><a href="https://unugha.ac.id" target="_blank" className="hover:text-unugha-gold transition-colors">Website UNUGHA</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-unugha-gold flex-shrink-0 mt-0.5" />
                <span>Jl. Kemerdekaan Barat No.12, Kesugihan, Cilacap, Jawa Tengah 53274</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-unugha-gold flex-shrink-0" />
                <a 
                  href="https://wa.me/6281327782079" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-unugha-gold transition-colors"
                >
                  +62 813-2778-2079
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-unugha-gold flex-shrink-0" />
                <span>lph@unugha.ac.id</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden h-48 bg-slate-800 shadow-lg border border-white/10">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.456789!2d109.123456!3d-7.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e656cbaaaaaaaab%3A0xaaaaaaaaaaaaaa!2sUniversitas%20Nahdlatul%20Ulama%20Al%20Ghazali!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Lokasi UNUGHA"
               className="opacity-80 hover:opacity-100 transition-opacity duration-300"
             ></iframe>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} LPH UNUGHA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
