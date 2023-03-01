// общее не зависящее от детального алгоритма - сдвига влева или вправо
import { Cipher } from "./Cipher";
type MapperFunction = (symb: string, shift: number) => string;
const aCodeAscii: number = 'a'.charCodeAt(0);
const zCodeAscii: number = 'z'.charCodeAt(0);
const nEnglishLetters: number = zCodeAscii - aCodeAscii + 1;
export class CipherImp implements Cipher {
    constructor(protected shift: number, protected flag: number) {
        this.shift = shift;
        this.flag = flag;
    }
    cipher(plainText: string): string {
        const arStr: Array<string> = Array.from(plainText);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= 'z' && symb >= 'a') {
                if (!this.flag) {
                    res = this.mapperCipher(symb, this.shift);
                } else { res = this.mapperDecipher(symb, this.shift) };
            }
            return res;
        })
        return arRes.join('');
    }
    decipher(cipherText: string): string {
        const arStr: Array<string> = Array.from(cipherText);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= 'z' && symb >= 'a') {
                if (!this.flag) {
                    res = this.mapperDecipher(symb, this.shift);
                } else { res = this.mapperCipher(symb, this.shift) };
            }
            return res;
        })
        return arRes.join('');
    }    
    mapperCipher(symb: string, shift: number): string {
        const actualShift: number =
            (symb.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
        return String.fromCharCode(aCodeAscii + actualShift);
    }
    mapperDecipher(symb: string, shift: number): string {
        const actualShift: number = (zCodeAscii - symb.charCodeAt(0) + shift) % nEnglishLetters;
        return String.fromCharCode(zCodeAscii - actualShift);
    }
}