import React from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact-form" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 bg-unugha-green text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">Butuh Bantuan?</h3>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Tim kami siap membantu Anda memahami proses sertifikasi halal. Silakan isi formulir di samping atau hubungi kami langsung.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider font-bold">Jam Operasional</p>
                    <p className="font-medium">Senin - Jumat: 08.00 - 16.00 WIB</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider font-bold">Telepon / WhatsApp</p>
                    <p className="font-medium">+62 812-3456-7890</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <p className="text-sm text-white/60">
                  Kami akan membalas pesan Anda sesegera mungkin.
                </p>
              </div>
            </div>

            <div className="p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-unugha-green focus:border-transparent outline-none transition-all"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-unugha-green focus:border-transparent outline-none transition-all"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Pesan</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-unugha-green focus:border-transparent outline-none transition-all"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
