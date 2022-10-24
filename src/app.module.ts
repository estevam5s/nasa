import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PlanetsModule } from './planets/module/planets.module';
import { RechargeModule } from './recharge//module/recharge.module';
import { StationModule } from './station/module/station.module';
import { UsersModule } from './users//module/users.module';

@Module({
  imports: [
    UsersModule,
    PlanetsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
    }),
    StationModule,
    RechargeModule,
  ],
  providers: [],
})
export class AppModule {}
