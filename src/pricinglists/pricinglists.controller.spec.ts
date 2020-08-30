import { Test, TestingModule } from '@nestjs/testing';
import { PricinglistsController } from './pricinglists.controller';

describe('PricinglistsController', () => {
  let controller: PricinglistsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PricinglistsController],
    }).compile();

    controller = module.get<PricinglistsController>(PricinglistsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
