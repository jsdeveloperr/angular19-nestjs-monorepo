import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { DimensionsService } from './dimensions.service';
import { CreateDimensionDto } from './dto/create-dimension.dto';
import { CalculateDimensionsDto } from './dto/calculate-dimensions.dto';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Dimension } from './dimension.entity';

@ApiTags('Dimensions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('dimensions')
export class DimensionsController {
  constructor(private readonly dimensionsService: DimensionsService) {}

  @ApiOperation({ summary: 'Retrieve all dimensions' })
  @ApiResponse({ status: 200, description: 'List of all dimensions.' })
  @Get()
  async findAll() {
    return this.dimensionsService.findAll();
  }

  @ApiOperation({ summary: 'Create a new dimension' })
  @ApiResponse({ status: 201, description: 'Dimension successfully created.' })
  @ApiResponse({ status: 400, description: 'Validation error: Missing required fields.' })
  @Post()
  async create(@Body() createDimensionDto: CreateDimensionDto) {
    return this.dimensionsService.create(
      createDimensionDto.type,
      createDimensionDto.width,
      createDimensionDto.length,
      createDimensionDto.height,
    );
  }

  @Post('calculate')
  @ApiOperation({ summary: 'Calculate carton to box and box to pallet' })
  @ApiResponse({ status: 200, description: 'Calculation results for carton to box and box to pallet.' })
  @ApiResponse({ status: 400, description: 'Invalid input for calculation.' })
  async calculate(@Body() calculateDimensionsDto: CalculateDimensionsDto) {

    const { carton, box, pallet, type, mode, unit } = calculateDimensionsDto;

    if (!carton || !box || !pallet) {
      throw new Error('Carton, Box, and Pallet dimensions are required.');
    }

    if (unit !== 'CM' && unit !== 'IN') {
      throw new Error('Invalid unit. Valid units are: CM, IN.');
    }

    if (
      pallet.width !== 40 ||
      pallet.length !== 48 ||
      pallet.height !== 60
    ) {
      throw new Error('Pallet dimensions must be exactly 40x48x60 inches for calculation.');
    }

    let cartonToBox = 0;
    let boxToPallet = 0;
    let palletCount = 0;

    switch (type) {
      case 'Carton':
        cartonToBox = this.dimensionsService.calculateCartonToBox(carton, box);
        boxToPallet = this.dimensionsService.calculateBoxToPallet(box, pallet);
        palletCount = boxToPallet;
        break;

      case 'Box':
        boxToPallet = this.dimensionsService.calculateBoxToPallet(box, pallet);
        palletCount = boxToPallet;
        break;

      case 'Pallet':
        palletCount = 1;
        break;

      default:
        throw new Error('Invalid package type. Valid types are: Cartons, Boxes, Pallets.');
    }

    if (mode === 'LCL' && palletCount >= 24) {
      throw new Error('Invalid mode: LCL mode cannot handle 24 or more pallets. Please choose FCL.');
    }

    if (mode === 'FCL' && palletCount > 24) {
      throw new Error('Invalid mode: FCL mode cannot handle more than 24 pallets.');
    }

    const size = pallet.width * pallet.length * pallet.height;
    const weight = palletCount * 10;

    if (mode === 'LCL' && palletCount < 24) {
      return {
        cartonToBox,
        boxToPallet,
        palletCount,
        mode: 'LCL',
        unit,
        size,
        weight,
        message: 'Mode is valid for LCL.',
      };
    }

    return {
      cartonToBox,
      boxToPallet,
      palletCount,
      mode,
      unit,
      size,
      weight,
      message: 'Calculation completed successfully.',
    };
  }

}
