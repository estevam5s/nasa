import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RechargeResolver } from '../resolver/recharge.resolver';
import { RechargeService } from '../service/recharge.service';

@Module({
  providers: [RechargeService, RechargeResolver, PrismaService]
})
export class RechargeModule {}
