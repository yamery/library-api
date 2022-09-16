import { Test, TestingModule } from '@nestjs/testing';
import { AutorsService } from './autors.service';

describe('AutorsService', () => {
  let service: AutorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutorsService],
    }).compile();

    service = module.get<AutorsService>(AutorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
