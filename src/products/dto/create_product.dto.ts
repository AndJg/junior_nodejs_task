import { IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @IsNotEmpty()
  @MaxLength(100)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  price: number;
}
