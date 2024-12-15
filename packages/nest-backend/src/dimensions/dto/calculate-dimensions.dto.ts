import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateDimensionDto } from './create-dimension.dto';

export class CalculateDimensionsDto {
  @ApiProperty({ description: 'Carton dimensions' })
  @ValidateNested()
  @Type(() => CreateDimensionDto)
  carton: CreateDimensionDto;

  @ApiProperty({ description: 'Box dimensions' })
  @ValidateNested()
  @Type(() => CreateDimensionDto)
  box: CreateDimensionDto;

  @ApiProperty({ description: 'Pallet dimensions' })
  @ValidateNested()
  @Type(() => CreateDimensionDto)
  pallet: CreateDimensionDto;

  @ApiProperty({ description: 'Selected package type (Cartons, Boxes, Pallets)' })
  @IsString()
  type: string;

  @ApiProperty({ description: 'Shipping mode (LCL or FCL)' })
  @IsString()
  mode: string;

  @ApiProperty({ description: 'Selected unit' })
  @IsString()
  unit: string;
}
