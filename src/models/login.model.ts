import { ProfileType } from './enum/ProfileType';

export class LoginModel {
  uid: string;
  userNmName: string;
  userNmLastname: string;
  userDtBirthdate: Date;
  userSgUser: string;
  userDsEmail: string;
  userCdPassword: string;
  userCdType: ProfileType;
  userTxAvatar: string;
}
