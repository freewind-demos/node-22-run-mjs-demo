// ES module syntax demo
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

console.log('Node.js version:', process.version);
console.log('Import meta URL:', import.meta.url);

// Using top-level await (supported in .mjs)
const message = await Promise.resolve('Hello from ES modules!');
console.log(message); 