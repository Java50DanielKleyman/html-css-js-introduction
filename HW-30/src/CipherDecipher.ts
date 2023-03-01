import { Cipher } from "./Cipher";
type MapperFunction = (symb: string, shift: number) => string;
const startCodeAscii: number = ' '.charCodeAt(0);
const endCodeAscii: number = '~'.charCodeAt(0);
const nStrings: number = endCodeAscii - startCodeAscii + 1;
export class CipherImp implements Cipher {
    constructor(protected shift: number, protected flag: number) {
        this.shift = shift;
        this.flag = flag;
    }
    cipher(plainText: string): string {
        const arStr: Array<string> = Array.from(plainText);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= '~' && symb >= ' ') {
                if (!this.flag) {
                    res = this.mapperCipher(symb, this.shift);
                } else { res = this.mapperDecipher(symb, this.shift) };
            }
            return res;
        })
        return arRes.join('');
    }
    decipher(plainText: string): string {
        const arStr: Array<string> = Array.from(plainText);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= '~' && symb >= ' ') {
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
            (symb.charCodeAt(0) - startCodeAscii + shift) % nStrings;
        return String.fromCharCode(startCodeAscii + actualShift);
    }
    mapperDecipher(symb: string, shift: number): string {
        const actualShift: number = (endCodeAscii - symb.charCodeAt(0) + shift) % nStrings;
        return String.fromCharCode(endCodeAscii - actualShift);
    }
}