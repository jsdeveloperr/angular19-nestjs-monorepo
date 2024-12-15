import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './offer.entity';
import { User } from '../users/user.entity';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private readonly offerRepository: Repository<Offer>,
  ) {}

  async create(offerData: Partial<Offer>, user: User): Promise<Offer> {
    const offer = this.offerRepository.create({ ...offerData, user });
    return this.offerRepository.save(offer);
  }

  async findAllByUser(userId: number): Promise<Offer[]> {
    return this.offerRepository.find({ where: { user: { id: userId } } });
  }

  convertToCm(value: number): number {
    return Math.round(value * 2.54);
  }

  convertToInches(value: number): number {
    return Math.round(value / 2.54);
  }

  convertToKg(value: number): number {
    return Math.round(value * 0.453592);
  }

  convertToLb(value: number): number {
    return Math.round(value / 0.453592);
  }
  
}
