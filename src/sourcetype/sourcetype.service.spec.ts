import { Test, TestingModule } from '@nestjs/testing';
import { SourcetypeService } from './sourcetype.service';

describe('SourcetypeService', () => {
  let service: SourcetypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SourcetypeService],
    }).compile();

    service = module.get<SourcetypeService>(SourcetypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
