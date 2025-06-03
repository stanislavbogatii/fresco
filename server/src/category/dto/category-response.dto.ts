import { ApiProperty } from "@nestjs/swagger";
import { CategoryContentResponseDto } from "./category-content-response.dto";
import { Expose } from "class-transformer";

export class CategoryResponseDto {
    @ApiProperty()
    @Expose()
    id: number;

    @ApiProperty()
    @Expose()
    code: string;

    @ApiProperty()
    @Expose()
    isActive: boolean;

    @ApiProperty({ required: false, nullable: true })
    @Expose()
    parentId?: number | null;

    @Expose()
    @ApiProperty({
        type: [CategoryContentResponseDto],
    })
    contents: CategoryContentResponseDto[];
}