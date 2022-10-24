import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recharge {
  @Field(() => Number)
  stationID: number;

  @Field(() => String)
  usuario: string;

  @Field(() => Date)
  inicio_recarga: Date;

  @Field(() => Date)
  fin_recarga: Date;
}
