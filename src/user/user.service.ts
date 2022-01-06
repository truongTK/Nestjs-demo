import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { queryParamsArg } from './dto/query-params.arg';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(queryParams: queryParamsArg) {
    return await this.usersRepository.find({
      skip: queryParams.pageIndex,
      take: queryParams.pageSize,
    });
  }

  async findOne(id: string) {
    return await this.usersRepository.findOne(id);
  }

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
