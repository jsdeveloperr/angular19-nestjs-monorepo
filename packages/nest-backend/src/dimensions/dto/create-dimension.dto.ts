import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreateDimensionDto {
  @ApiProperty({ example: 'Carton', description: 'The type of the dimension' })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({ example: 12, description: 'The width of the dimension' })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  width: number;

  @ApiProperty({ example: 12, description: 'The length of the dimension' })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  length: number;

  @ApiProperty({ example: 12, description: 'The height of the dimension' })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  height: number;
}
