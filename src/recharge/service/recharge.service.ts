import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RechargeService {
    constructor(private readonly prisma: PrismaService) {}

    async createRecharge(data) {
        data.inicio_recarga = new Date();
        return this.prisma.recarga.create({
            data,
        });
    }

    // método para que apenas um usuário autenticado poderá fazer uma recarga
    async recharge(id: number, usuario: string) {
        const recarga = await this.prisma.recarga.findFirst({
            where: {
                id,
                usuario,
            },
        });
    }

    async cancelRecharge(id: number) {
        const recarga = await this.prisma.recarga.findFirst({
            where: {
                id,
            },
        });

        if (recarga) {
            return this.prisma.recarga.update({
                where: {
                    id,
                },
                data: {
                    fin_recarga: new Date(),
                },
            });
        } else return null;
    }

    async hasRecargaAndamento(stationID: number) {
        const recarga = await this.prisma.recarga.findFirst({
            where: {
                stationID,
                // fin_recarga: {
                //     gt: new Date(),
                // }
            },
        });
        if (recarga) {
            return {
                message:
                    'Já existe uma recarga em andamento, ela será finalizada em ' +
                    recarga.fin_recarga.toLocaleString(),
            };
        } else return null;
    }

    async hasRecargaUser(usuario: string) {
        const recarga = await this.prisma.recarga.findFirst({
            where: {
                usuario,
            },
        });
        if (recarga) {
            return {
                message:
                    'você já possui uma recarga em andamento, aguarde até ' +
                    recarga.fin_recarga.toLocaleString(),
            };
        } else return null;
    }

    async getRecarga(id: number) {
        const recarga = await this.prisma.recarga.findFirst({
            where: {
                id,
            },
        });

        if (recarga) {
            return {
                message:
                    'Recarga encontrada' + recarga.fin_recarga.toLocaleString(),
            };
        } else return null;
    }

    // métoddo para retornar o histórico de recargas de uma estação

    async rechargeHistory(stationID: number) {
        const recarga = await this.prisma.recarga.findMany({
            where: {
                stationID,
            },
        });

        if (recarga) {
            return recarga;
        } else return null;
    }
}
