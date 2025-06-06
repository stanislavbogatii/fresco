import { CategoryResponseDto } from '../models/CategoryResponseDto';
import { PaginationResponse } from '@/models/PaginationResponse';
import apiClientService from '@/common/services/ApiClientService';

const baseUrl = '/categories';

export async function getCategories(): Promise<PaginationResponse<CategoryResponseDto>> {
  const response = await apiClientService.get(baseUrl);
  return await response.json();
}

export async function getCategory(id: number) {
  const response = await apiClientService.get(`${baseUrl}/${id}`);
  return await response.json();
}

export async function getCategoryBySlug(slug: string): Promise<CategoryResponseDto> {
  const url = `${baseUrl}/slug/${slug}`;
  const response = await apiClientService.get(url);
  return response.json();
}

export async function getCategoriesSuggestions(): Promise<string[]> {
  const response = await apiClientService.get(`${baseUrl}/suggestions`);
  return await response.json();
}
