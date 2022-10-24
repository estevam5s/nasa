import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Planet } from 'src/planets/entities/planet.entity';
import { Station } from '../entities/station.entity';
import { StationService } from '../service/station.service';

@Resolver(() => Station)
export class StationResolver {
    constructor(private readonly stationService: StationService) {}

    @Query(() => [Station], { name: 'stations' })
    async stations() {
        return await this.stationService.findAll();
    }

    // agora, criar essa mutation reservation e fazer ela funcionar

    // Crie uma serviço stationHistory, onde será possível visualizar o histórico de recargas de uma estação que recebe stationID, inicio_recarga, fin_recarga, usuario
    @Query(() => [Station], { name: 'stationHistory' })
    async stationHistory(
        @Args({ name: 'stationID', type: () => Number }) stationID: number,
    ) {
        // criar uma variável que retorna o histórico de recargas de uma estação, usando o prisma para buscar todas as recargas de uma estação no banco de dados
        return await this.stationService.stationHistory(stationID);
    }

    // como ficará essa query no insomnia? (para visualizar o histórico de recargas de uma estação)

    // query stationHistory {
    //     stationHistory(stationID: 1) {
    //         id
    //         inicio_recarga
    //         fin_recarga
    //         usuario
    //     }
    // }

    // Crie uma query stationHistory, onde será possível visualizar o histórico de recargas de uma estação (mostrar o horário, o tempo de duração da recarga e o usuário que realizou-a)

    @Mutation((returns) => Station)
    async installStation(
        @Args({ name: 'planetName', type: () => String }) planetName: string,
    ): Promise<Station> {
        return await this.stationService.installStation({
            pl_name: planetName,
        } as Planet);
    }

    // mutation reservation, que dado uma estação, um usuário e um intervalo de tempo, cria uma reserva da estação para o usuário naquele determinado intervalo de tempo.
    @Mutation((returns) => String)
    async reservation(
        @Args({ name: 'stationID', type: () => Number }) stationID: number,
        @Args({ name: 'usuario', type: () => String }) usuario: string,
        @Args({ name: 'inicio', type: () => Date }) inicio: Date,
        @Args({ name: 'fin', type: () => Date }) fin: Date,
    ) {
        // Não deve ser possível criar uma reserva que conflite com o intervalo de outra reserva ou de uma recarga já em andamento

        const recarga = await this.stationService.reservation(
            stationID,
            usuario,
            inicio,
            fin,
        );

        // Para realizar uma recarga de uma determinada reserva, é necessário chamar uma mutation (podendo ser a própria recharge ou uma nova mutation - como você preferir) passando apenas um reservationId.

        if (recarga) {
            // const recharge = await this.stationService.recharge(recarga.id);
            return 'Recarga realizada';
        }

        return await this.stationService.reservation(
            stationID,
            usuario,
            inicio,
            fin,
        );
    }

    // como ficará essa mutation no insomnia?

    // ```	graphql
    // mutation {
    //     reservation(
    //         stationID: 1
    //         usuario: "João"
    //         inicio: "2021-06-01T00:00:00.000Z"
    //         fin: "2021-06-01T01:00:00.000Z"
    //     )
    // }
    // ```

    // Mutation cancelReservation, que dado uma reserva, cancela a reserva.
    @Mutation((returns) => String)
    async cancelStation(
        @Args({ name: 'reservationID', type: () => Number })
        reservationID: number,
    ) {
        const cancel = await this.stationService.cancelStation(reservationID);

        if (cancel) {
            return 'Station cancelada';
        }

        return 'Station não encontrada';
    }

    // como ficará essa mutation no insomnia?

    // ```	graphql
    // mutation cancelStation {
    //     cancelStation(reservationID: 1)
    // }
    // ```
}
