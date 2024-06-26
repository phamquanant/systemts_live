import { Test, TestingModule } from '@nestjs/testing';
import { VpsController } from './vps.controller';
import { VpsService } from './vps.service';

describe('VpsController', () => {
  let controller: VpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VpsController],
      providers: [VpsService],
    }).compile();

    controller = module.get<VpsController>(VpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
