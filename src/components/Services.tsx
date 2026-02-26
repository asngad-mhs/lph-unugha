import React from 'react';
import { Microscope, FileCheck, GraduationCap, Building2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Pemeriksaan Produk",
      description: "Audit lapangan dan pemeriksaan dokumen bahan baku, proses produksi, hingga pengemasan untuk memastikan kepatuhan syariah.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Verifikasi Dokumen",
      description: "Pemeriksaan kelengkapan dan keabsahan dokumen pendukung sertifikasi halal sesuai persyaratan BPJPH.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Pelatihan Penyelia Halal",
      description: "Training kompetensi untuk penyelia halal internal perusahaan agar memahami Sistem Jaminan Produk Halal (SJPH).",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Konsultasi Industri",
      description: "Pendampingan bagi industri skala kecil, menengah, hingga besar dalam persiapan audit halal.",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-unugha-green font-bold tracking-wide uppercase text-sm mb-3">Layanan Kami</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              Solusi Lengkap untuk Kebutuhan Halal Anda
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Kami menyediakan layanan komprehensif mulai dari pemeriksaan awal hingga pendampingan teknis, memastikan produk Anda siap bersaing di pasar global dengan jaminan halal.
            </p>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ${service.color}`}>
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-unugha-gold/20 rounded-3xl transform rotate-3 blur-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Lab Services" 
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[600px]"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium">Total Sertifikasi</p>
                  <p className="text-3xl font-bold text-slate-900">500+ UMKM</p>
                </div>
                <div className="h-10 w-px bg-slate-200"></div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Kepuasan Mitra</p>
                  <p className="text-3xl font-bold text-slate-900">98%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
