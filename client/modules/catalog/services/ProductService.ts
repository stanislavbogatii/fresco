import { YasError } from '@/common/services/errors/YasError';
import { ProductSlug } from '../../cart/models/ProductSlug';
import { ProductAll, ProductFeature } from '../models/ProductFeature';
import { ProductOptionValueDisplay, ProductOptionValueGet } from '../models/ProductOptionValueGet';
import { ProductThumbnail } from '../models/ProductThumbnail';
import { ProductVariation } from '../models/ProductVariation';
import { ProductsGet } from '../models/ProductsGet';
import { SimilarProduct } from '../models/SimilarProduct';
import apiClientService from '@/common/services/ApiClientService';
import { CreateProductDto } from '../models/CreateProductDto';
import { ProductResponseDto } from '../models/ProductResponseDto';
import { PaginationResponse } from '@/models/PaginationResponse';
import { GetProductsQueryDto } from '../models/GetproductsQueryDto';

const baseUrl = '/products';
const serverSideRenderUrl = `${process.env.API_BASE_PATH}/product/storefront`;

export async function getProducts(query: GetProductsQueryDto): Promise<PaginationResponse<ProductResponseDto>> {
  const params = new URLSearchParams();

  if (query.page) params.append('page', String(query.page));
  if (query.limit) params.append('limit', String(query.limit));
  if (query.search) params.append('search', query.search);
  if (query.companyId) params.append('companyId', String(query.companyId));
  if (query.categoryId) params.append('categoryId', String(query.categoryId));
  const url = `${baseUrl}?${params.toString()}`;
  const response = await apiClientService.get(url);
  return response.json();
}

export async function getProductBySlug(slug: string): Promise<ProductResponseDto> {
  const response = await apiClientService.get(`${baseUrl}/slug/${slug}`);
  return response.json();
}

export async function createProduct(dto: CreateProductDto) {
  return await apiClientService.post(baseUrl, JSON.stringify(dto));
}

export async function getProductOptionValues(productId: number): Promise<ProductOptionValueGet[]> {
  const res = await apiClientService.get(
    `${serverSideRenderUrl}/product-option-combinations/${productId}/values`
  );
  if (res.status >= 200 && res.status < 300) return res.json();
  throw new Error(await res.json());
}

export async function getProductByMultiParams(queryString: string): Promise<ProductAll> {
  const res = await apiClientService.get(`${baseUrl}/products?${queryString}`);
  return res.json();
}

export async function getProductVariationsByParentId(
  parentId: number
): Promise<ProductVariation[]> {
  const res = await apiClientService.get(`${serverSideRenderUrl}/product-variations/${parentId}`);
  if (res.status >= 200 && res.status < 300) return res.json();
  throw new Error(await res.json());
}

export async function getProductSlug(productId: number): Promise<ProductSlug> {
  const res = await apiClientService.get(`${baseUrl}/productions/${productId}/slug`);
  if (res.status >= 200 && res.status < 300) return res.json();
  throw new Error(await res.json());
}

export async function getRelatedProductsByProductId(productId: number): Promise<ProductsGet> {
  const res = await apiClientService.get(`${baseUrl}/products/related-products/${productId}`);
  if (res.status >= 200 && res.status < 300) return res.json();
  throw new Error(await res.json());
}

export async function getSimilarProductsByProductId(productId: number): Promise<SimilarProduct[]> {
  const res = await apiClientService.get(
    `/api/recommendation/embedding/product/${productId}/similarity`
  );
  if (res.status >= 200 && res.status < 300) return res.json();
  throw new Error(await res.json());
}

export async function getProductsByIds(ids: number[]): Promise<ProductThumbnail[]> {
  const response = await apiClientService.get(`${baseUrl}/products/list-featured?productId=${ids}`);
  const jsonResponse = await response.json();
  if (!response.ok) {
    throw new YasError(jsonResponse);
  }
  return jsonResponse;
}

export async function getProductOptionValueByProductId(
  productId: number
): Promise<ProductOptionValueDisplay[]> {
  const url = `${baseUrl}/product-option-values/${productId}`;
  console.log(url);

  const response = await apiClientService.get(url);
  if (response.status >= 200 && response.status < 300) return await response.json();
  return Promise.reject(new Error(response.statusText));
}
