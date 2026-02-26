import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 to-green-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-unugha-gold animate-pulse" />
              Lembaga Pemeriksa Halal Terpercaya
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Menjamin Kehalalan, <br />
              <span className="text-unugha-gold">Menjaga Kepercayaan.</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              LPH UNUGHA hadir sebagai mitra strategis pelaku usaha dalam proses sertifikasi halal yang cepat, akurat, dan profesional sesuai syariat Islam dan standar regulasi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-unugha-gold text-green-950 font-bold rounded-full hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/20"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-unugha-gold" />
                <span className="text-sm font-medium">Terakreditasi BPJPH</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-unugha-gold" />
                <span className="text-sm font-medium">Auditor Kompeten</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Card / Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Halal Inspection"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-white font-serif text-xl italic">
                  "Makanan yang halal adalah kunci kesehatan jasmani dan rohani."
                </p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-unugha-green">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Status</p>
                  <p className="text-lg font-bold text-slate-900">Resmi & Diakui</p>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Bekerja sama dengan BPJPH dan MUI untuk standar tertinggi.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
