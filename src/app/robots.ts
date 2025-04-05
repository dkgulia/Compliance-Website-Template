import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/', '/admin/'],
    },
    sitemap: 'https://hexafort.io/sitemap.xml',
  }
}