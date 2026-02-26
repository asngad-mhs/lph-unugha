import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title = "LPH UNUGHA - Lembaga Pemeriksa Halal Terpercaya", 
  description = "Lembaga Pemeriksa Halal (LPH) Universitas Nahdlatul Ulama Al Ghazali (UNUGHA). Mitra strategis sertifikasi halal yang cepat, akurat, dan profesional.",
  keywords = "LPH UNUGHA, Lembaga Pemeriksa Halal, Sertifikasi Halal, Halal Indonesia, UNUGHA Cilacap, Audit Halal, BPJPH",
  image = "https://drive.google.com/uc?export=view&id=1iN-VpUPUB_dSFtZbRqxCDbpWYM1h4Bpp",
  url = "https://lph.unugha.ac.id"
}: SEOProps) {
  const siteTitle = title;
  const fullUrl = url;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content="LPH UNUGHA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Tags for Mobile */}
      <meta name="theme-color" content="#006837" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#006837" />
    </Helmet>
  );
}
