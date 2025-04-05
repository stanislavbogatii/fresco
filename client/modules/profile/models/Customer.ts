import { Company } from "./Company";
import { Profile } from "./Profile";

export type Customer = {
  email: string;
  profile: Profile;
  company: Company
};

