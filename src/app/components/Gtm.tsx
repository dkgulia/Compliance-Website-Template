
'use client';

import { useEffect } from 'react';

export default function GTM() {
  useEffect(() => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-KR6FJCG6';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}