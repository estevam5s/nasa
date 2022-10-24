import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Planet } from 'src/planets/entities/planet.entity';
import { Station } from '../entities/station.entity';

@Injectable()
export class StationService {
    recharge(id: any) {
        throw new Error('Method not implemented.');
    }

    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        // Crie uma query stations, que irá listar todas as estações instaladas nos planetas
        // usar o prisma para buscar todas as estações de carregamento no banco de dados
        return await this.prisma.station.findMany();
    }

    async mappedByPlanet() {
        const mapped = new Map<string, Array<Station>>();

        for await (const station of await this.findAll()) {
            if (mapped.has(station.planetName)) {
                const stations = mapped.get(station.planetName);
                stations.push(station);
                mapped.set(station.planetName, stations);
            } else mapped.set(station.planetName, new Array(station));
        }
        return mapped;
    }

    async installStation(planet: Planet): Promise<Station> {
        // instala uma estação de carregamento no planeta(é sugerido criar uma tabela em algum DB que guarde a informação de aonde estão instaladas as estações)
        // agora que já temos o parâmetro planet, podemos fazer a instalação da estação de carregamento
        return await this.prisma.station.create({
            data: {
                planetName: planet.pl_name,
            },
        });
    }

    //  Crie uma mutation reservation, que dado uma estação, um usuário e um intervalo de tempo, cria uma reserva da estação para o usuário naquele determinado intervalo de tempo.

    async reservation(
        stationID: number,
        usuario: string,
        inicio: Date,
        fin: Date,
    ) {
        const recarga = await this.prisma.recarga.create({
            data: {
                stationID,
                usuario,
                inicio_recarga: inicio,
                fin_recarga: fin,
            },
        });

        // Não deve ser possível criar uma reserva que conflite com o intervalo de outra reserva ou de uma recarga já em andamento

        if (recarga) {
            return {
                message: 'Reserva criada',
            };
        }

        // A utilização só pode ocorrer dentro do próprio intervalo de tempo da reserva (e.g. Se a reserva foi de 12:00 até 13:00, só deve ser possível utilizá-la entre 12:00 e 13:00).

        const hasRecarga = await this.prisma.recarga.findFirst({
            where: {
                stationID,
                inicio_recarga: {
                    gt: new Date(),
                },
            },
        });

        // Se a reserva foi de 12:00 até 13:00, só deve ser possível utilizá-la entre 12:00 e 13:00

        if (hasRecarga) {
            return {
                message:
                    'Já existe uma recarga em andamento, ela será finalizada em ' +
                    hasRecarga.fin_recarga.toLocaleString(),
            };
        }

        return recarga;
    }

    // Crie uma serviço stationHistory, onde será possível visualizar o histórico de recargas de uma estação

    async stationHistory(stationID: number) {
        const history = await this.prisma.recarga.findMany({
            where: {
                stationID,
            },
        });

        if (history) {
            return history;
        }

        return {
            message: 'Não há histórico de recargas para esta estação',
        };
    }

    // Crie uma query stationHistory, onde será possível visualizar o histórico de recargas de uma estação (mostrar o horário, o tempo de duração da recarga e o usuário que realizou-a)

    // async stationHistory(stationID: number, usuario: string) {
    //     const history = await this.prisma.recarga.findMany({
    //         where: {
    //             stationID,
    //             usuario: {
    //                 contains: usuario,
    //             },
    //         },
    //     });

    //     if (history) {
    //         return history;
    //     }

    //     return {
    //         message: 'Não há histórico de recargas para esta estação',
    //     };
    // }

    async cancelStation(stationID: number) {
        const station = await this.prisma.station.delete({
            where: {
                id: stationID,
            },
        });

        if (station) {
            return {
                message: 'Estação removida',
            };
        }

        return {
            message: 'Estação não encontrada',
        };
    }
}
