import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateRechargeInput } from './create-recharge.input';

@InputType()
export class UpdateStationInput extends PartialType(CreateRechargeInput) {
  @Field(() => Int)
  id: number;
}
