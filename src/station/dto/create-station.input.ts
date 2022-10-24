import { Field, InputType } from '@nestjs/graphql';
import { IsString, Matches } from 'class-validator';
import { Station } from '../entities/station.entity';

@InputType()
export class CreateStationInput extends Station {
  @Field(() => String)
  @IsString()
  @Matches(/[a-zA-Z0-9_-]{2,20}/)
  planetName: string;

}
