import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://cerrana.com';

const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/platform', priority: '0.9', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' }
];

export function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const route of routes) {
    const cleanPath = route.path === '/' ? '' : route.path;
    
    // Default Route
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${cleanPath}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}${cleanPath}?lang=es" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${cleanPath}?lang=en" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${cleanPath}" />\n`;
    xml += `  </url>\n`;

    // ES Version
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${cleanPath}?lang=es</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}${cleanPath}?lang=es" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${cleanPath}?lang=en" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${cleanPath}" />\n`;
    xml += `  </url>\n`;

    // EN Version
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${cleanPath}?lang=en</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}${cleanPath}?lang=es" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${cleanPath}?lang=en" />\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${cleanPath}" />\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  // Ensure public directory exists
  const publicDir = path.resolve(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(publicSitemapPath, xml, 'utf8');
  console.log(`Generated and wrote sitemap.xml to public target: ${publicSitemapPath}`);

  // Ensure dist directory if build output exists
  const distDir = path.resolve(__dirname, 'dist');
  if (fs.existsSync(distDir)) {
    const distSitemapPath = path.join(distDir, 'sitemap.xml');
    fs.writeFileSync(distSitemapPath, xml, 'utf8');
    console.log(`Generated and wrote sitemap.xml to dist target: ${distSitemapPath}`);
  }
}

// Automatically invoke if run directly
const runDirectly = () => {
  try {
    const isMain = !process.argv[1] || 
      path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
    if (isMain) {
      generateSitemap();
    }
  } catch (err) {
    // Fallback invocation
    generateSitemap();
  }
};

runDirectly();
