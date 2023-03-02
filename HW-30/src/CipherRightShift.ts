import { CipherImp } from "./CipherDecipher";
export class CipherRightShift extends CipherImp{
    constructor(shift: number){
        super(shift, CipherImp.prototype.mapperCipher, 
            CipherImp.prototype.mapperDecipher);
    }    
}