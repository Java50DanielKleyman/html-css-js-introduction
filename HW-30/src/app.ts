import { CipherLeftShift } from "./CipherLeftShift"
import { CipherRightShift } from "./CipherRightShift"
import { displayCipherDecipher } from "./displayCipherDecipher"

const cipherrightshift:  CipherRightShift = new CipherRightShift(2)
const cipherleftshift: CipherLeftShift = new CipherLeftShift(3)
displayCipherDecipher(cipherrightshift, 'aaa"')
displayCipherDecipher(cipherleftshift, 'aaa"')

