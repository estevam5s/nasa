import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Station {
  @Field(() => ID)
  id?: number;

  @Field(() => String)
  planetName: string;
}
