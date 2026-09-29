import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './entities/task.entity.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';


@Injectable()
export class TasksService {

  constructor(@InjectModel(Task.name) private TaskModel: Model<Task>) {}

  async create(createTaskDto: CreateTaskDto) {

    //console.log("createTaskDto", createTaskDto)
    const createdCourse = await this.TaskModel.create(
      {  
        name: createTaskDto.name,
        description: createTaskDto.description,
        role: createTaskDto.role,
        done: createTaskDto.done
      }
    )

    //console.log("createdCourse", createdCourse)

    return {createdCourse};
    
  }

  async findAll() {
    const courses = await this.TaskModel.find()
    return {courses};
  }

  async findOne(id: string) {
    const courses = await this.TaskModel.findById(id)
    return {courses};
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
