import { Controller, Post, Get, Body, Req, UseGuards } from '@nestjs/common';
import { OffersService } from './offers.service';
import { Offer } from './offer.entity';
import { CreateOfferDto } from './dto/create-offer.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from '../users/user.entity';
import { Request } from 'express';

@ApiTags('Offers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @ApiOperation({ summary: 'Create a new offer' })
  @ApiResponse({ status: 201, description: 'Offer successfully created.' })
  @ApiResponse({ status: 400, description: 'Validation error: Missing required fields.' })
  @Post()
  async create(@Body() createOfferDto: CreateOfferDto, @Req() req: Request): Promise<Offer> {
    const user = req.user as User;

  if (createOfferDto.unit_1 === 'CM') {
    createOfferDto.size = this.offersService.convertToInches(createOfferDto.size);
    createOfferDto.unit_1 = 'IN';
  } else if (createOfferDto.unit_1 === 'IN') {
    createOfferDto.size = this.offersService.convertToCm(createOfferDto.size);
    createOfferDto.unit_1 = 'CM';
  }

  if (createOfferDto.unit_2 === 'KG') {
    createOfferDto.weight = this.offersService.convertToLb(createOfferDto.weight);
    createOfferDto.unit_2 = 'LB';
  } else if (createOfferDto.unit_2 === 'LB') {
    createOfferDto.weight = this.offersService.convertToKg(createOfferDto.weight);
    createOfferDto.unit_2 = 'KG';
  }

    return this.offersService.create(createOfferDto, user);
  }

  @ApiOperation({ summary: 'Get all offers of the authenticated user' })
  @ApiResponse({ status: 200, description: 'List of user offers.' })
  @Get()
  async findAll(@Req() req: Request): Promise<Offer[]> {
    const user = req.user as User;
    return this.offersService.findAllByUser(user.id);
  }
  
}



