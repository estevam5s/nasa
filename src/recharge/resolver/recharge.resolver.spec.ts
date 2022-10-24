import { Test, TestingModule } from '@nestjs/testing';
import { RechargeResolver } from './recharge.resolver';

describe('RechargeResolver', () => {
  let resolver: RechargeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RechargeResolver],
    }).compile();

    resolver = module.get<RechargeResolver>(RechargeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
