import { IsArray } from 'class-validator';
import { CsvItemDto } from './CsvItemDto';

export class CsvItemsDto {
  @IsArray()
  csvArr: CsvItemDto[];
}
