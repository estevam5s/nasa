import { Query, Resolver } from '@nestjs/graphql';
import { Planet } from '../entities/planet.entity';
import { PlanetsService } from '../service/planets.service';

/**
 * Resolver for the planets
 * @export PlanetsResolver
 * @class PlanetsResolver
 */
@Resolver(() => Planet)
export class PlanetsResolver {
    constructor(private readonly planetsService: PlanetsService) {}

    // query suitablePlanets, que retorna os dados dos planetas com gravidade alta
    @Query(() => [Planet], { name: 'suitablePlanets' })
    async suitablePlanets() {
        return await this.planetsService
            .findSuitablePlanets(10)
            .catch((err) => {
                return new Array<Planet>();
            });
    }
}
