import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { queryParamsArg } from './dto/query-params.arg';
import { filterArg } from './dto/filter.arg';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(@Args() queryParams: queryParamsArg) {
    return this.userService.findAll(queryParams);
  }

  @Query(() => User, { nullable: true })
  async user(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Query(() => [User])
  async filter(@Args() filter: filterArg) {
    return this.userService.find(filter);
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => String }) id: string) {
    return this.userService.remove(id);
  }
}
