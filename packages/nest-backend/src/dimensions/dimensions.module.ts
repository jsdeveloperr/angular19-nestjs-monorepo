import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DimensionsService } from './dimensions.service';
import { DimensionsController } from './dimensions.controller';
import { Dimension } from './dimension.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dimension])],
  providers: [DimensionsService],
  controllers: [DimensionsController],
})
export class DimensionsModule {}
