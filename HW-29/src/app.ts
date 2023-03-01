import { CipherRightShift } from "./CipherRightShift"
import { displayCipherDecipher } from "./displayCipherDecipher"
/*
TODO
new cipherleftshift(shift)
new cipherrightshift(shift)
*/
const cipherrightshift:  CipherRightShift = new CipherRightShift(2)
displayCipherDecipher(cipherrightshift, 'aaa')

