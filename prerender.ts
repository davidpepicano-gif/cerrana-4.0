import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, 'dist');
const distSsrPath = path.resolve(__dirname, 'dist-ssr');

// Import the server bundle
const ssrModulePath = path.resolve(distSsrPath, 'entry-server.js');
const { render } = await import(ssrModulePath);

// Define pages to pre-render
const routes = [
  '/',
  '/platform',
  '/services',
  '/pricing',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service'
];

async function run() {
  console.log('Initiating static pre-rendering...');
  
  // Read client-side output index.html as our shell template
  const templatePath = path.resolve(distPath, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client bundle template not found at ${templatePath}`);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  for (const route of routes) {
    console.log(`Pre-rendering page: ${route}...`);
    
    const helmetContext: any = {};
    const appHtml = render(route, helmetContext);
    const { helmet } = helmetContext;

    // Compile extra head elements from react-helmet-async
    const headExtra = [
      helmet ? helmet.title?.toString() : '',
      helmet ? helmet.meta?.toString() : '',
      helmet ? helmet.link?.toString() : '',
      helmet ? helmet.script?.toString() : ''
    ].filter(Boolean).join('\n');

    // Graft standard React container ID markup with fully-rendered static HTML
    let html = template
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replace('</head>', `${headExtra}\n</head>`);

    // Determine path destination matching direct server route mapping (Splat routing)
    let fileDir = distPath;
    let fileName = 'index.html';

    if (route !== '/') {
      fileDir = path.join(distPath, route.slice(1));
      if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir, { recursive: true });
      }
    }

    const outputPath = path.join(fileDir, fileName);
    fs.writeFileSync(outputPath, html, 'utf-8');
    console.log(`Successfully generated static output: ${outputPath}`);
  }

  // Remove the temporary server SSR build directory to keep build artifact footprint clean
  fs.rmSync(distSsrPath, { recursive: true, force: true });
  console.log('Pre-rendering SSG execution finished with success!');
}

run().catch((error) => {
  console.error('Fatal failure pre-rendering static routes:', error);
  process.exit(1);
});
