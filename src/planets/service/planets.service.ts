import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Planet } from '../entities/planet.entity';

@Injectable()
export class PlanetsService {
    constructor(private readonly httpService: HttpService) {}

    /**
     * @description busca todos planetas com massa maior que o parâmetro
     * @param pl_bmassj_min massa mínima
     * @returns planetas
     */
    findSuitablePlanets(
        pl_bmassj_min: number,
    ): Promise<AxiosResponse<Planet[]> | Planet[]> {
        return this.httpService.axiosRef.get(
            `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_bmassj+from+ps+where+pl_bmassj%3E${pl_bmassj_min}&format=json`,
        );
    }
}
