import apiClientService from '@commonServices/ApiClientService';
import { AttributeResponseDto } from '@catalogModels/AttributeResponseDto';
import { CreateAttributeDto } from '@catalogModels/CreateAttributeDto';

const baseUrl = '/attributes';

export async function getAttributes(): Promise<AttributeResponseDto[]> {
  return (await apiClientService.get(baseUrl)).json();
}

export async function getAttribute(id: number): Promise<AttributeResponseDto> {
  const url = `${baseUrl}/${id}`;
  return (await apiClientService.get(url)).json();
}

export async function createAttribute(attribute: CreateAttributeDto): Promise<boolean> {
  await apiClientService.post(baseUrl, JSON.stringify(attribute));
  return true;
}

export async function deleteAttribute(id: number): Promise<boolean> {
  const url = `${baseUrl}/${id}`;
  await apiClientService.delete(url);
  return true;
}
