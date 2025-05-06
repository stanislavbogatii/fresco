import { Media } from '../models/Media';
import apiClientService from '@/common/services/ApiClientService';

export const getMediaById = async (id: number): Promise<Media> => {
  const response = await apiClientService.get(`/api/media/medias/${id}`);

  if (response.status >= 200 && response.status < 300) return await response.json();
  throw response;
};


const baseUrl = '/medias';

export async function uploadMedia(image: File): Promise<Media> {
  const body = new FormData();
  body.append('multipartFile', image);
  const response = await apiClientService.post(baseUrl, body);
  if (response.status >= 200 && response.status < 300) return await response.json();
  return Promise.reject(response);
}
