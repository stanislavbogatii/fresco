import { SignInPostVm } from './../models/SignInPostVm';
import apiClientService from '@/common/services/ApiClientService';
import { YasError } from '@/common/services/errors/YasError';
import { SignUpPostVm } from '../models/SignUpPostVm';

const CART_BASE_URL = `/auth`;

export async function signup(payload: SignUpPostVm): Promise<{access_token: string}> {
  const response = await apiClientService.post(CART_BASE_URL + '/signup', JSON.stringify(payload));
  if (!response.ok) {
    await throwDetailedError(response);
  }
  return await response.json();
}

export async function signin(payload: SignInPostVm): Promise<{access_token: string}> {
  const response = await apiClientService.post(CART_BASE_URL + '/signin', JSON.stringify(payload));
  if (!response.ok) {
    await throwDetailedError(response);
  }
  return await response.json();
}

export async function signout(): Promise<void> {
  const response = await apiClientService.delete(CART_BASE_URL + '/signout');
  if (!response.ok) {
    await throwDetailedError(response);
  }
}



async function throwDetailedError(response: Response) {
  const errorResponse = await response.json();
  throw new YasError(errorResponse);
}
