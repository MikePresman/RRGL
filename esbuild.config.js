import esbuild from 'esbuild';
import { graphqlPlugin } from './esbuild-plugin-graphql.js';  // Custom plugin
import fs from 'fs';
import path from 'path';

const buildDir = path.resolve('app/assets/builds');
console.log("Starting esbuild...");

// Clean the build directory
fs.rmSync(buildDir, { recursive: true, force: true });

// Get all files in the app/javascript folder that match *.jsx or *.js
const files = fs.readdirSync('app/javascript')
  .filter(file => file.endsWith('.jsx') || file.endsWith('.js'))
  .map(file => path.join('app/javascript', file));

const context = await esbuild.context({
  entryPoints: files,
  bundle: true,
  sourcemap: true,
  outdir: 'app/assets/builds',
  publicPath: 'assets',
  plugins: [graphqlPlugin()],
  minify: false,
  loader: {
    '.jsx': 'jsx',
    '.js': 'js',
  },
});

// Enable watch mode
context.watch().then(() => {
  console.log("Esbuild is now watching for changes...");
}).catch((error) => {
  console.error("Error starting watch mode:", error);
  process.exit(1);
});

