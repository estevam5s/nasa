import { Test, TestingModule } from '@nestjs/testing';
import { PlanetsResolver } from './planets.resolver';

describe('PlanetsResolver', () => {
  let resolver: PlanetsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanetsResolver],
    }).compile();

    resolver = module.get<PlanetsResolver>(PlanetsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
