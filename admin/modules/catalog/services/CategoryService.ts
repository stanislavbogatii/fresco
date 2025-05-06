import { Category } from '../models/Category';
import { ProductThumbnails } from '../models/ProductThumbnails';
import apiClientService from '@commonServices/ApiClientService';

const baseUrl = '/categories';

export async function getCategories(): Promise<Category[]> {
  return (await apiClientService.get(baseUrl)).json();
}

export async function getCategory(id: number): Promise<Category> {
  const url = `${baseUrl}/${id}`;
  return (await apiClientService.get(url)).json();
}

export async function createCategory(category: Record<string, any>) {
  return await apiClientService.post(baseUrl, JSON.stringify(category));
}


export async function updateCategory(id: number, category: Record<string, any>) {
  const url = `${baseUrl}/${id}`;
  return (await apiClientService.patch(url, JSON.stringify(category)));
  // if (response.status === 204) return response;
  // else return await response.json();
}
export async function deleteCategory(id: number) {
  const url = `${baseUrl}/${id}`;
  return (await apiClientService.delete(url));
}

export async function getProductsByCategory(
  pageNo: number,
  categorySlug: string
): Promise<ProductThumbnails> {
  const url = `/api/product/storefront/category/${categorySlug}/products?pageNo=${pageNo}`;
  return (await apiClientService.get(url)).json();
}
