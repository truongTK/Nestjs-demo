import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // NOTE: database credentials should get from environment variable
      // hard code for now
      type: 'postgres',
      host: 'ec2-18-235-86-66.compute-1.amazonaws.com',
      port: 5432,
      username: 'effwxiafkxkbwe',
      password:
        '8967f8203697307d130aa00658070e646ca013873ca1495451c9434e3c0fe4c7',
      database: 'd9gk4fap5q82gu',
      entities: [User],
      synchronize: true,
      logging: true,
      ssl: false,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
