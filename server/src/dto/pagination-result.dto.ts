import { Expose, Type } from "class-transformer";

export class PaginationResultDto<T> {
    @Expose()
    @Type(() => Object)
    items: T[];

    @Expose()
    total: number;

    constructor(total: number, items: T[]) {
    this.total = total;
    this.items = items;
  }
}