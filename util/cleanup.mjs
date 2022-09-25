// Import module(s).
import { rmSync } from 'fs';

// Clean-up build directory.
rmSync('./app', { recursive: !0, force: !0 });

// Log completion.
console.log('Clean complete!');
