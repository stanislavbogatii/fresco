export type Customer = {
  id: string;
  email: string;
  createdTimestamp: Date;
  profile: Profile;
};

export type Profile = {
  firstName: string;
  lastName: string;
  phone: string;
}

export type CustomerCreateVM = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword?: string;
  role: string;
};

export type CustomerUpdateVM = {
  email: string;
  firstName: string;
  lastName: string;
};
