import { AttributeType } from "./AttributeType";

export type CreateAttributeDto = {
    name: string;
    type: AttributeType;
    options?: string; 
}