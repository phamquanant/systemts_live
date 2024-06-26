import { Test, TestingModule } from '@nestjs/testing';
import { SourcetypeController } from './sourcetype.controller';
import { SourcetypeService } from './sourcetype.service';

describe('SourcetypeController', () => {
  let controller: SourcetypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SourcetypeController],
      providers: [SourcetypeService],
    }).compile();

    controller = module.get<SourcetypeController>(SourcetypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
