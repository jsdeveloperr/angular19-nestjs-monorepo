import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dimension } from './dimension.entity';
import { CreateDimensionDto } from './dto/create-dimension.dto';

@Injectable()
export class DimensionsService {
  constructor(
    @InjectRepository(Dimension)
    private readonly dimensionRepository: Repository<Dimension>,
  ) {}

  async findAll(): Promise<Dimension[]> {
    return this.dimensionRepository.find();
  }

  async create(type: string, width: number, length: number, height: number): Promise<Dimension> {
    if (!type || !width || !length || !height) {
      throw new Error('Missing required fields');
    }
    const dimension = this.dimensionRepository.create({ type, width, length, height });
    return this.dimensionRepository.save(dimension);
  } 

  calculateCartonToBox(carton: any, box: any): number {
    const boxCount = Math.floor(box.width / carton.width) *
                     Math.floor(box.length / carton.length) *
                     Math.floor(box.height / carton.height);
    return boxCount;
  }

  calculateBoxToPallet(box: any, pallet: any): number {
    const palletCount = Math.floor(pallet.width / box.width) *
                        Math.floor(pallet.length / box.length) *
                        Math.floor(pallet.height / box.height);
    return palletCount;
  }
  
  convertToCm(value: number): number {
    return value * 2.54;
  }

  convertToInches(value: number): number {
    return value / 2.54;
  }

  convertToKg(value: number): number {
    return value * 0.453592;
  }

  convertToLb(value: number): number {
    return value / 0.453592;
  }
  
}
