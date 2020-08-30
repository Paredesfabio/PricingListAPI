import { Test, TestingModule } from '@nestjs/testing';
import { PricinglistsService } from './pricinglists.service';

describe('PricinglistsService', () => {
  let service: PricinglistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PricinglistsService],
    }).compile();

    service = module.get<PricinglistsService>(PricinglistsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
