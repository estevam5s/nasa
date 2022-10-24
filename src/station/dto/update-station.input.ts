import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateStationInput } from './create-station.input';

@InputType()
export class UpdateStationInput extends PartialType(CreateStationInput) {
  @Field(() => Int)
  id: number;
}
