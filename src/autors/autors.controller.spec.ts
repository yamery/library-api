import { Test, TestingModule } from '@nestjs/testing';
import { AutorsController } from './autors.controller';
import { AutorsService } from './autors.service';

describe('AutorsController', () => {
  let controller: AutorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutorsController],
      providers: [AutorsService],
    }).compile();

    controller = module.get<AutorsController>(AutorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
