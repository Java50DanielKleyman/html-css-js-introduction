import { CipherImp } from "./CipherDecipher";
const flag: number = 0;
export class CipherRightShift extends CipherImp{
    constructor(shift: number){
        super(shift, flag);
    }    
}