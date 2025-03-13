import apiClientService from '@/common/services/ApiClientService';
import { YasError } from '@/common/services/errors/YasError';
import { RegisterPost } from '../models/RegisterPost';

const CART_BASE_URL = `/auth/signup`;

export async function register(payload: RegisterPost): Promise<{access_token: string}> {
  const response = await apiClientService.post(CART_BASE_URL, JSON.stringify(payload));
  if (!response.ok) {
    await throwDetailedError(response);
  }
  return await response.json();
}

export async function getMe(): Promise<any> {
  const response = await apiClientService.get('/users/me');
  if (!response.ok) {
    await throwDetailedError(response);
  }
  return await response.json();
}


async function throwDetailedError(response: Response) {
  const errorResponse = await response.json();
  throw new YasError(errorResponse);
}
