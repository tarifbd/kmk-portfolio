import { IsString, IsEmail, IsOptional, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  organization?: string;

  @IsOptional()
  @IsString()
  service?: string;

  @IsString()
  @MinLength(10)
  message: string;
}
