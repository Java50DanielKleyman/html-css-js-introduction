import { CipherImp } from "./CipherDecipher";
const flag: number = 1;
export class CipherLeftShift extends CipherImp{
    constructor(shift: number){
        super(shift, flag);
    }    
}