import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    productType: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, company, productType, email, message } = formData;
    const phoneNumber = '6281327782079';
    
    const text = `*FORMULIR PENDAFTARAN SERTIFIKASI HALAL LPH UNUGHA*\n\n` +
      `Nama Lengkap: ${name}\n` +
      `Nama Perusahaan/UMKM: ${company}\n` +
      `Jenis Produk: ${productType}\n` +
      `Email: ${email}\n\n` +
      `Pesan Tambahan:\n${message}`;
      
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact-form" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 bg-unugha-green text-white flex flex-col justify-between relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 z-0 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Pattern" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold mb-4">Butuh Bantuan?</h3>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Tim kami siap membantu Anda memahami proses sertifikasi halal. Silakan isi formulir pendaftaran di samping atau hubungi kami langsung jika ada pertanyaan.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider font-bold">Jam Operasional</p>
                    <p className="font-medium">Senin - Jumat: 08.00 - 16.00 WIB</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider font-bold">Telepon / WhatsApp</p>
                    <p className="font-medium">+62 813-2778-2079</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <p className="text-sm text-white/60">
                  Kami akan membalas pesan Anda sesegera mungkin.
                </p>
              </div>
            </div>

            <div className="p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Formulir Pendaftaran</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-unugha-green focus:border-transparent outline-none transition-all"
                    placeholder="Nama Anda"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Nama Perusahaan / UMKM</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-unugha-green focus:border-transparent outline-none transition-all"
                    placeholder="Nama Usaha Anda"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="productType" className="block text-sm font-medium text-slate-700 mb-1">Jenis Produk</label>
                  <select
                    id="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-unugha-green focus:border-transparent outline-none transition-all bg-white"
                    required
                  >
                    <option value="">Pilih Jenis Produk</option>
                    <option value="Makanan">Makanan</option>
                    <option value="Minuman">Minuman</option>
                    <option value="Kosmetik">Kosmetik</option>
                    <option value="Obat-obatan">Obat-obatan</option>
                    <option value="Jasa">Jasa / Lainnya</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-unugha-green focus:border-transparent outline-none transition-all"
                    placeholder="email@contoh.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Pesan / Pertanyaan (Opsional)</label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-unugha-green focus:border-transparent outline-none transition-all"
                    placeholder="Tulis pesan tambahan..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-5 h-5" />
                  Kirim Pendaftaran via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
