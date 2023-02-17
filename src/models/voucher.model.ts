import { BaseModel } from './base.model';

export class VoucherModel extends BaseModel {

    voucCdCode: string;
    voucVlExpiresin: number;

    constructor() {
        super();
    }
}
