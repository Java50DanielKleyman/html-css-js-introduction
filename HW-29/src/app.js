"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherLeftShift_1 = require("./CipherLeftShift");
const CipherRightShift_1 = require("./CipherRightShift");
const displayCipherDecipher_1 = require("./displayCipherDecipher");
const cipherrightshift = new CipherRightShift_1.CipherRightShift(2);
const cipherleftshift = new CipherLeftShift_1.CipherLeftShift(1);
(0, displayCipherDecipher_1.displayCipherDecipher)(cipherrightshift, 'aaa');
(0, displayCipherDecipher_1.displayCipherDecipher)(cipherleftshift, 'aaa');
//# sourceMappingURL=app.js.map