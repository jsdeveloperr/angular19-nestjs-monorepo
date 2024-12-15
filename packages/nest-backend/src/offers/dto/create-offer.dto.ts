import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';

export class CreateOfferDto {
  @ApiProperty({ example: 'LCL', description: 'The mode of the offer' })
  @IsString()
  mode: string;

  @ApiProperty({ example: 'Port to Port', description: 'The movement type of the offer' })
  @IsString()
  movement_type: string;

  @ApiProperty({ example: 'DDP', description: 'The incoterm of the offer' })
  @IsString()
  incoterm: string;

  @ApiProperty({ example: 'USA', description: 'The country of the offer' })
  @IsString()
  country: string;

  @ApiProperty({ example: 'New York', description: 'The city of the offer' })
  @IsString()
  city: string;

  @ApiProperty({ example: 'Cartons', description: 'The package type of the offer' })
  @IsString()
  package_type: string;

  @ApiProperty({ example: 'IN', description: 'The first unit of the offer' })
  @IsString()
  unit_1: string;

  @ApiProperty({ example: 'LB', description: 'The second unit of the offer' })
  @IsString()
  unit_2: string;

  @ApiProperty({ example: 'USD', description: 'The currency of the offer' })
  @IsString()
  currency: string;

  @ApiProperty({ example: 5, description: 'The pallet count of the offer', required: false })
  @IsOptional()
  @IsNumber()
  pallet_count?: number;

  @ApiProperty({ example: 10, description: 'The size of the offer. Automatically converted based on unit_1.' })
  @IsNumber()
  size: number;
  
  @ApiProperty({ example: 5, description: 'The weight of the offer. Automatically converted based on unit_2.' })
  @IsNumber()
  weight: number;
  
}
