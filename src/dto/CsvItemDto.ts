import { IsNumberString } from 'class-validator';

export class CsvItemDto {
  @IsNumberString()
  new_price: string;

  @IsNumberString()
  product_code: string;
}
