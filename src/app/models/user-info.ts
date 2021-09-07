export interface UserInfo {
  id?: string;
  info: {
    email: string;
    name: string;
    surname: string;
    middleName: string;
    phoneNumber: number;
    dateBirth: string;
    sex: string;
    uid: string;
  };
}
