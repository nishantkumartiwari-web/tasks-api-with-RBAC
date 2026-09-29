import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({default: 'user'})
  role: string;

  @Prop()
  done: boolean;
} 

export const TaskSchema = SchemaFactory.createForClass(Task);

