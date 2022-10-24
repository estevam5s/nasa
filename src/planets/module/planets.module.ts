import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PlanetsResolver } from '../resolver/planets.resolver';
import { PlanetsService } from '../service/planets.service';


@Module({
    imports: [
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5,
        }),
    ],
    providers: [PlanetsService, PlanetsResolver],
})
export class PlanetsModule {}
