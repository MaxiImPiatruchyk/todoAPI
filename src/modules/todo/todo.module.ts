import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './enitites/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [],
  providers: [],
})
export class TodoModule {}
