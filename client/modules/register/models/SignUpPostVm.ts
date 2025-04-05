import { GenderEnum } from "@/modules/customer/models/GenderEnum";

export type SignUpPostVm = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone: string;
  companyName: string,
  companyCommercialName: string,
  companyFiscalCode?: string,
  companyPhone?: string,
  gender?: GenderEnum[]
};


