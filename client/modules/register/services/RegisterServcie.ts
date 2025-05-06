import { SignInPostVm } from './../models/SignInPostVm';
import apiClientService from '@/common/services/ApiClientService';
import { YasError } from '@/common/services/errors/YasError';
import { SignUpPostVm } from '../models/SignUpPostVm';

const BASE_URL = `/auth`;

export async function signup(payload: SignUpPostVm): Promise<{access_token: string, message?: string}> {
  const response = await apiClientService.post(BASE_URL + '/signup', JSON.stringify(payload));

  const data = await response.json();
  if (!response.ok) {
    return await {...data, message: data?.message ?? 'Error signing up'};
  }
  return await data;
}

export async function signin(payload: SignInPostVm): Promise<{access_token: string}> {
  const response = await apiClientService.post(BASE_URL + '/signin', JSON.stringify(payload));
  if (!response.ok) {
    await throwDetailedError(response);
  }
  return await response.json();
}

export async function signout(): Promise<void> {
  const response = await apiClientService.delete(BASE_URL + '/signout');
  if (!response.ok) {
    await throwDetailedError(response);
  }
}

async function throwDetailedError(response: Response) {
  const errorResponse = await response.json();
  throw new YasError(errorResponse);
}
