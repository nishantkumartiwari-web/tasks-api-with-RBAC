import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { Roles } from '../auth/roles.decorator.js';
import { Role } from './role.enum.js';
import { RolesGuard } from '../auth/roles.guard.js';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  //needs RBAC -> only Admin allowed - 
  @Post('/add')
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  create(@Body(new ValidationPipe()) createTaskDto: CreateTaskDto) {
    return this.tasksService.create({
      name: createTaskDto.name,
      description: createTaskDto.description,
      role: createTaskDto.role,
      done: createTaskDto.done
    });
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
