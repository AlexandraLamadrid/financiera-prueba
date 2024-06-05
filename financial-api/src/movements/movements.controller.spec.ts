import { Test, TestingModule } from '@nestjs/testing';
import { MovementsController } from './movements.controller';
import { beforeEach, describe, it } from 'node:test';
import expect from 'expect';

describe('MovementsController', () => {
  let controller: MovementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovementsController],
    }).compile();

    controller = module.get<MovementsController>(MovementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
