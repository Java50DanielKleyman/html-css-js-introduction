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
        // this.plainText = plainText
    }
    cipher(plainText: string): string {
        const arStr: Array<string> = Array.from(plainText);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= 'z' && symb >= 'a') {
                if (!this.flag) {
                    res = this.mapperCipher(symb, this.shift);
                }
            }
            res = this.mapperDecipher(symb, this.shift);
            return res;
        })
        return arRes.join('');
        //todo - общий код - сайфер райт шифт и сайфер лефт шифт

    }
    decipher(cipherText: string): string {
        const arStr: Array<string> = Array.from(cipherText);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb <= 'z' && symb >= 'a') {
                if (!this.flag) {
                    res = this.mapperDecipher(symb, this.shift);
                }
            }
            res = this.mapperCipher(symb, this.shift);
            return res;
        })
        return arRes.join('');
        //   todo - общий код - сайфер райт шифт и сайфер лефт шифт
        // общее как шейп. мэппер фанкшин, еще что то
        //диапазон от ! до тильды (32-126 печатных символов - весь набор символов)
        //мэппер передать как свойство, как ширину-высотуб который должен быть внутри 
        //конструктора сайфер имплб также свойство сам шифт. 
        throw new Error("Method not implemented.");
    }
    //shift - то что общее
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