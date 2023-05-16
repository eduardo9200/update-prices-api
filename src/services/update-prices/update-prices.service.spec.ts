import { Test, TestingModule } from '@nestjs/testing';
import { UpdatePricesService } from './update-prices.service';

describe('UpdatePricesService', () => {
  let service: UpdatePricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdatePricesService],
    }).compile();

    service = module.get<UpdatePricesService>(UpdatePricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
