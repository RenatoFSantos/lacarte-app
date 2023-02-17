import { AddressModel } from './address.model';
import { BaseModel } from './base.model';
import { SegmentModel } from './segment.model';
import { UserModel } from './user.model';


export class CompanyModel extends BaseModel {

  compNmCompany: string;
  compNmTrademark: string;
  compDsCompany: string;
  compCdCNPJ: string;
  compDsPhone: string;
  compDsSmartphone: string;
  compDsWhatsapp: string;
  compDsEmail: string;
  compDsSite: string;
  compCdPix: string;
  compTxImage: string;
  compInDelivery: boolean;
  compCdDelivery: string;
  compVlDelivery: number;
  compDsTags: string;
  compVlRating: number;
  compDsLogo: string;
  segment: SegmentModel;
  address: AddressModel;
  user: UserModel;


  constructor() {
    super();
    this.segment = new SegmentModel();
    this.address = new AddressModel();
    this.user = new UserModel();
  }
}
