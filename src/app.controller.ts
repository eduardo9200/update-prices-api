import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CsvItemsDto } from './dto/CsvItemsDto';
import { ValidateCsvService } from './services/validate-csv/validate-csv.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly validateCsvService: ValidateCsvService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/validar-csv')
  validateCSVFile(@Body() fileContent: CsvItemsDto) {
    return this.validateCsvService.validate(fileContent.csvArr);
  }

  @Put('/atualizar-precos')
  atualizarPrecos(@Body() fileContent: CsvItemsDto) {
    return true;
  }
}
