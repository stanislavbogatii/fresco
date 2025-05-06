import { Customer } from '../models/Customer';
import { EditUserDto } from '../models/EditUserDto';
import { ProfileRequest } from '../models/ProfileRequest';
import apiClientService from '@/common/services/ApiClientService';

export async function getMyProfile(): Promise<Customer | null> {
  const url = '/users/me';
  const response = await apiClientService.get(url);
  if (response.status >= 200 && response.status < 300) return await response.json();
  else return null;
}

export async function updateCustomer(profile: EditUserDto) {
  const url = '/users';
    const response = await apiClientService.patch(url, JSON.stringify(profile));
  if (response.status === 204) {
    return true;
  }
  else return false;
}

