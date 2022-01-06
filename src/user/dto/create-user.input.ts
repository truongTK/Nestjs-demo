import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'first name of the user' })
  firstName: string;

  @Field(() => String, { description: 'last name of the user' })
  lastName: string;

  @Field(() => String, { description: 'email of the user' })
  email: string;

  @Field(() => String, { description: 'State of the user' })
  State: string;

  @Field(() => Boolean, { description: 'Pet experience of the user' })
  petExperience: boolean;
}
