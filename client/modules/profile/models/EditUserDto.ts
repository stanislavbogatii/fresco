import { GenderEnum } from "./GenderEnum";

export type EditUserDto = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  gender?: GenderEnum;
}