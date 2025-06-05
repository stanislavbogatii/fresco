import { Company } from "./Company";
import { Profile } from "./Profile";

export type Customer = {
  id: number;
  email: string;
  profile: Profile;
  company: Company
};

