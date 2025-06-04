import { Expose } from "class-transformer";

export class AttributeResponseDto {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    options: string;

    @Expose({groups: ['admin']})
    cretedAt: Date;
}