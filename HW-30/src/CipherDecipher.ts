import { Cipher } from "./Cipher";
type MapperFunction = (symb: string, shift: number) => string;
const startCodeAscii: number = ' '.charCodeAt(0);
const endCodeAscii: number = '~'.charCodeAt(0);
const nStrings: number = endCodeAscii - startCodeAscii + 1;
export class CipherImp implements Cipher {
    #mapperFunCipher;
    #mapperFunDecipher;
    constructor(protected shift: number, 
        mapperFunCipher: MapperFunction, mapperFunDecipher: MapperFunction) {
        this.shift = shift;        
        this.#mapperFunCipher =  mapperFunCipher;
        this.#mapperFunDecipher = mapperFunDecipher;
    }
    cipher(plainText: string): string {       
        return this.cipherDecipher(plainText, this.shift, this.#mapperFunCipher)
    }
    decipher(plainText: string): string {       
        return this.cipherDecipher(plainText, this.shift, this.#mapperFunDecipher)
    }
    cipherDecipher(str: string, shift: number,
        mapperFun: MapperFunction): string {
        const arStr: Array<string> = Array.from(str);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= '~' && symb >= ' ') {
                res = mapperFun(symb, shift);
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