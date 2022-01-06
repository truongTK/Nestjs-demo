import { Entity, Column, PrimaryColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
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

  @Column()
  @Field(() => String, { description: 'email of the user' })
  email: string;

  @Column()
  @Field(() => String, { description: 'State of the user' })
  State: string;

  @Column()
  @Field(() => Boolean, { description: 'Pet experience of the user' })
  petExperience: boolean;
}
