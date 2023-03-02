import { CipherImp } from "./CipherDecipher";
export class CipherLeftShift extends CipherImp{
    constructor(shift: number){
        super(shift, CipherImp.prototype.mapperDecipher, 
            CipherImp.prototype.mapperCipher);
    }    
}