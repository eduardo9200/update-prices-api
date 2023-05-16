import { Test, TestingModule } from '@nestjs/testing';
import { ValidateCsvService } from './validate-csv.service';

describe('ValidateCsvService', () => {
  let service: ValidateCsvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValidateCsvService],
    }).compile();

    service = module.get<ValidateCsvService>(ValidateCsvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
