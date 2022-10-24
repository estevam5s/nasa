import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Recharge } from '../entities/recharge.entity';

@InputType()
export class CreateRechargeInput extends Recharge {
  @Field(() => Number)
  @IsNumber()
  stationID: number;

  @Field(() => Date)
  @IsDate()
  fin_recarga: Date;

  @Field(() => String)
  @IsString()
  usuario: string;

}
