import { AttributeType } from "./AttributeType";

export type AttributeResponseDto = {
    id: number;
    name: string;
    type: AttributeType;
    options?: string;
    createdAt: Date;
}
