import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integritas Tinggi",
      description: "Menjunjung tinggi nilai kejujuran dan transparansi dalam setiap proses pemeriksaan."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Auditor Profesional",
      description: "Didukung oleh tim auditor bersertifikat yang ahli di bidang pangan, kimia, dan syariah."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Standar Global",
      description: "Mengacu pada standar HAS 23000 dan regulasi pemerintah yang berlaku."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Layanan Cepat",
      description: "Proses pemeriksaan yang efisien tanpa mengurangi ketelitian dan kualitas."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-unugha-green font-bold tracking-wide uppercase text-sm mb-3">Tentang Kami</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
            Lembaga Pemeriksa Halal UNUGHA
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            LPH UNUGHA adalah unit pelaksana teknis di bawah Universitas Nahdlatul Ulama Al Ghazali yang bertugas melakukan kegiatan pemeriksaan dan/atau pengujian terhadap kehalalan produk. Kami berkomitmen membantu UMKM dan industri dalam mewujudkan ekosistem halal di Indonesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-unugha-green shadow-sm mb-6 group-hover:bg-unugha-green group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
