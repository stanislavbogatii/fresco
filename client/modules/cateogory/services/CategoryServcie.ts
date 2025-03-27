import apiClientService from '@/common/services/ApiClientService';
import { YasError } from '@/common/services/errors/YasError';
import { Category } from '../model/Category';

const BASE_URL = `/category`;


export class CategoryService {
  async findAll(): Promise<Category[]> {
    const response = await apiClientService.get(BASE_URL);
    if (!response.ok) {
      await this.throwDetailedError(response);
    }
    return await response.json();
  }
  
  
  async throwDetailedError(response: Response) {
    const errorResponse = await response.json();
    throw new YasError(errorResponse);
  }
}
