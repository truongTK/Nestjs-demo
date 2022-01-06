import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { queryParamsArg } from './dto/query-params.arg';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { filterArg } from './dto/filter.arg';
import { getConnection } from 'typeorm';

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

  async find(filter: filterArg) {
    const query = await getConnection()
      .createQueryBuilder()
      .select('user')
      .from(User, 'user');

    if (filter.email !== undefined) {
      query.where('user.email = :email', {
        email: filter.email,
      });
    }

    if (filter.name !== undefined)
      query.andWhere(
        "CONCAT(user.firstName, ' ', user.lastName) LIKE :fullName",
        {
          fullName: `%${filter.name}%`,
        },
      );
    if (filter.State !== undefined) {
      query.andWhere('user.State = :State', {
        State: filter.State,
      });
    }

    if (filter.petExperience !== undefined) {
      query.andWhere('user.petExperience = :petExperience', {
        petExperience: filter.petExperience,
      });
    }

    return await query.skip(filter.pageIndex).take(filter.pageSize).getMany();
  }

  async create(createUserInput: CreateUserInput) {
    return await this.usersRepository.create(createUserInput);
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    return await this.usersRepository.update(id, updateUserInput);
  }

  async remove(id: string) {
    return await this.usersRepository.delete(id);
  }
}
