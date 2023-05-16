import { Injectable } from '@nestjs/common';
import { CsvItemDto } from 'src/dto/CsvItemDto';
import { LineStatusDto } from 'src/dto/LineStatusDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ValidateCsvService {
  constructor(private readonly prisma: PrismaService) {}

  public validate(csv: CsvItemDto[]) {
    const lineStatus: LineStatusDto[] = [];

    csv.forEach((line) => {
      const l: LineStatusDto = new LineStatusDto();

      if (!line.new_price || !line.product_code) {
        l.status = false;
        l.statusError = 'Novo preço e/ou código inválidos';
      }

      if (line.product_code) {
        this.prisma.products
          .findFirst({
            where: { code: +line.product_code },
          })
          .then((result) => {
            if (result) {
              l.nome = result.name;
              l.precoAtual = result.sales_price.toNumber();
              l.novoPreco = +line.new_price;
              l.status = true;
            } else {
              l.status = false;
              l.statusError = 'Não existe produto com o código informado';
            }
          });
      }

      lineStatus.push(l);
    });

    console.log(lineStatus);
  }
}
