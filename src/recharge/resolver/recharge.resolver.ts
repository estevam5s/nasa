import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRechargeInput } from '../dto/create-recharge.input';
import { Recharge } from '../entities/recharge.entity';
import { RechargeService } from '../service/recharge.service';

/**
 * @description Resolver for the recharges
 * @export RechargeResolver
 * @class RechargeResolver
 */
@Resolver(() => Recharge)
export class RechargeResolver {
    constructor(private readonly rechargeService: RechargeService) {}

    // criar uma mutation para que o usuário possa cancelar a recarga
    @Mutation(() => Recharge)
    async cancelRecharge(@Args('id') id: number): Promise<Recharge> {
        const recharge = await this.rechargeService.cancelRecharge(id);
        if (recharge) {
            return recharge;
        } else {
            throw new Error('Recarga não encontrada ou já finalizada');
        }
    }

    // como ficará a mutation no insomnia?

    // mutation cancelRecharge {
    //     cancelRecharge(id: 1) {
    //         id
    //         inicio_recarga
    //         fin_recarga
    //         usuario
    //         stationID
    //     }
    // }

    @Mutation((returns) => Recharge)
    async recharge(
        @Args({ name: 'data', type: () => CreateRechargeInput })
        data: CreateRechargeInput,
    ): Promise<Recharge> {
        const usuarioCarregando = await this.rechargeService.hasRecargaUser(
            data.usuario,
        );
        console.log(usuarioCarregando);
        if (!(usuarioCarregando == null)) {
            return Promise.reject(usuarioCarregando);
        }

        const stationCarregando =
            await this.rechargeService.hasRecargaAndamento(data.stationID);

        if (!(stationCarregando == null)) {
            return Promise.reject(stationCarregando);
        }

        console.log(stationCarregando);

        return await this.rechargeService.createRecharge(data);
    }

    // como ficará a mutation no insomnia?

    // mutation recharge {
    //     recharge(data: {
    //         usuario: "user1"
    //         stationID: 1
    //     }) {
    //         id
    //         inicio_recarga
    //         fin_recarga
    //         usuario
    //         stationID
    //     }
    // }

    // query para retonar o histórico de recargas da estação
    @Query(() => [Recharge], { name: 'rechargeHistory' })
    async rechargeHistory(
        @Args({ name: 'stationID', type: () => Number }) stationID: number,
    ): Promise<Recharge[]> {
        return await this.rechargeService.rechargeHistory(stationID);
    }
    // como ficará a query no insomnia?

    // query rechargeHistory {
    //     rechargeHistory(stationID: 1) {
    //         stationID
    //         usuario
    //         inicio_recarga
    //         fin_recarga
    //     }
    // }
}
