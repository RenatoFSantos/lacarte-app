import { BaseModel } from  './base.model';


export class AddressModel extends BaseModel {

  addrNmAddress: string;
  addrCdType: string;
  addrDsAddress: string;
  addrDsNumber: string;
  addrDsComplement: string;
  addrNmDistrict: string;
  addrNmCity: string;
  addrSgState: string;
  addrCdZipcode: string;

  constructor() {
    super();
  }
}
