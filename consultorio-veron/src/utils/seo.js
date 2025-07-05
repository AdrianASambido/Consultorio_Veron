// Utilidades para SEO y meta tags dinámicos

export const updateMetaTags = (title, description, image = null, url = null) => {
  // Actualizar título
  if (title) {
    document.title = title;
  }

  // Actualizar meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && description) {
    metaDescription.setAttribute('content', description);
  }

  // Actualizar Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && title) {
    ogTitle.setAttribute('content', title);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription && description) {
    ogDescription.setAttribute('content', description);
  }

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage && image) {
    ogImage.setAttribute('content', image);
  }

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl && url) {
    ogUrl.setAttribute('content', url);
  }

  // Actualizar Twitter Card tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle && title) {
    twitterTitle.setAttribute('content', title);
  }

  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription && description) {
    twitterDescription.setAttribute('content', description);
  }

  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage && image) {
    twitterImage.setAttribute('content', image);
  }
};

export const generateStructuredData = (data) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Consultorio Verón",
    "description": "Servicios de evaluación física y rendimiento deportivo",
    "url": "https://consultorio-veron.vercel.app",
    "telephone": "+54-9-XXX-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AR",
      "addressRegion": "Buenos Aires"
    },
    "serviceType": [
      "Evaluación Física",
      "Rendimiento Deportivo",
      "Asesoramiento en Salud Deportiva"
    ],
    "openingHours": "Mo-Fr 09:00-18:00",
    ...data
  };

  // Agregar structured data al DOM
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

export const setCanonicalUrl = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
};

export const addMetaTag = (name, content, property = false) => {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let meta = document.querySelector(selector);
  
  if (!meta) {
    meta = document.createElement('meta');
    if (property) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
}; 