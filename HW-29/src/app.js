"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherRightShift_1 = require("./CipherRightShift");
const displayCipherDecipher_1 = require("./displayCipherDecipher");
/*
TODO
new cipherleftshift(shift)
new cipherrightshift(shift)
*/
const cipherrightshift = new CipherRightShift_1.CipherRightShift(2);
(0, displayCipherDecipher_1.displayCipherDecipher)(cipherrightshift, 'aaa');
//# sourceMappingURL=app.js.map