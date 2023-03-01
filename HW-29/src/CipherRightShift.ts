import { CipherImp } from "./CipherDecipher";
const flag: number = 0;
export class CipherRightShift extends CipherImp{
    constructor(shift: number){
        super(shift, flag);
    }
    //todo
    //ciphering right shift: ' ' + shift
    //deciphering left shift: '~' - shift
    //все что повторяется - в сайфер импл
}