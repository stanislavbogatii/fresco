import { IsNotEmpty, IsString } from "class-validator";

export class CreateLangDto {
  @IsNotEmpty()
  @IsString()
  langId: string;
}
