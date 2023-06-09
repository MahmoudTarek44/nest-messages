import { Test, TestingModule } from '@nestjs/testing';
import { AuthersController } from './authers.controller';

describe('AuthersController', () => {
  let controller: AuthersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthersController],
    }).compile();

    controller = module.get<AuthersController>(AuthersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
