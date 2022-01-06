import { Entity, Column, PrimaryColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
@Entity()
@ObjectType()
export class User {
  @PrimaryColumn()
  @Field(() => String, { description: 'id of the user' })
  id: string;

  @Column()
  @Field(() => String, { description: 'first name of the user' })
  firstName: string;

  @Column()
  @Field(() => String, { description: 'last name of the user' })
  lastName: string;
}
