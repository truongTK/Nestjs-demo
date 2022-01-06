import { Field, Int, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class filterArg {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  State?: string;

  @Field({ nullable: true })
  petExperience?: boolean;

  @Field(() => Int, { defaultValue: 0 })
  pageIndex: number;

  @Field(() => Int, { defaultValue: 5 })
  pageSize: number;
}
