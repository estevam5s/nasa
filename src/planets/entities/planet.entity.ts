import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Planet {
  @Field(() => String)
  pl_name: string;

  @Field(() => Number)
  pl_bmassj: number;
}
