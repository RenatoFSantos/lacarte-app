import { BaseModel } from './base.model';
import { CompanyModel } from './company.model';


export class PromotionModel extends BaseModel {
  promNmPromotion: string;
  promDsPromotion: string;
  promCdQrcode: string;
  promDtStart: Date;
  promDtFinish: Date;
  promCdStatus: string;
  company: CompanyModel;

  constructor() {
    super();
    this.company = new CompanyModel();
  }
}
