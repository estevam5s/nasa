import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { StationResolver } from '../resolver/station.resolver';
import { StationService } from '../service/station.service';

@Module({
  providers: [StationService, StationResolver, PrismaService]
})
export class StationModule {}
