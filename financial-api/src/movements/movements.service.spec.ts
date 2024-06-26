import { Test, TestingModule } from '@nestjs/testing';
import { MovementsService } from './movements.service';
import { beforeEach, describe, it } from 'node:test';

describe('MovementsService', () => {
  let service: MovementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovementsService],
    }).compile();

    service = module.get<MovementsService>(MovementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
