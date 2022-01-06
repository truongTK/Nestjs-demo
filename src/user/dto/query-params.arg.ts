import { Int } from '@nestjs/graphql';
import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class queryParamsArg {
  @Field(() => Int, { defaultValue: 0 })
  pageIndex: number;
  @Field(() => Int, { defaultValue: 5 })
  pageSize: number;
}
