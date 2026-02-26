import React from 'react';
import { ClipboardList, Search, FileCheck, Award } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      id: 1,
      title: "Pendaftaran",
      description: "Pelaku usaha mendaftar melalui SIHALAL dan memilih LPH UNUGHA sebagai lembaga pemeriksa.",
      icon: <ClipboardList className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Pre-Audit",
      description: "LPH UNUGHA melakukan verifikasi dokumen dan menghitung biaya pemeriksaan.",
      icon: <Search className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Audit Lapangan",
      description: "Auditor melakukan pemeriksaan langsung ke lokasi produksi dan pengambilan sampel jika diperlukan.",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Sidang Fatwa & Sertifikat",
      description: "Laporan hasil audit diserahkan ke MUI untuk fatwa, kemudian BPJPH menerbitkan sertifikat.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-unugha-green font-bold tracking-wide uppercase text-sm mb-3">Alur Sertifikasi</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
            Proses Mudah & Transparan
          </h3>
          <p className="text-lg text-slate-600">
            Kami mendampingi Anda di setiap langkah menuju sertifikasi halal resmi.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-16 h-16 mx-auto bg-unugha-green text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 ring-4 ring-white">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-unugha-gold rounded-full flex items-center justify-center text-xs font-bold text-green-900 border-2 border-white">
                    {step.id}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://ptsp.halal.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors"
          >
            Daftar di SIHALAL Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
