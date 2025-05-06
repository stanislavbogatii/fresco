import apiClientService from '@/common/services/ApiClientService';
import { Language } from '../models/Language';

const baseUrl = '/langs'

export async function getLanguages(): Promise<Language[]> {
  const response = await apiClientService.get(baseUrl);
  return (await apiClientService.get(baseUrl)).json();
}


