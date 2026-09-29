import { IsBoolean, IsInt, IsString } from "class-validator";

export class CreateTaskDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsBoolean()
  done: boolean;

  @IsString()
  role: string
}
