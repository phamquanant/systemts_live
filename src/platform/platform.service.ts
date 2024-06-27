import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Platform } from './entities/platform.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlatformService {
  constructor(
    @InjectRepository(Platform)
    private platformRepository: Repository<Platform>,
  ) {}
  async create(createPlatformDto: CreatePlatformDto): Promise<Platform> {
    const platform = this.platformRepository.create(createPlatformDto);
    return await this.platformRepository.save(platform);
  }

  async findAll(): Promise<Platform[]> {
    return await this.platformRepository.find();
  }

  async findOne(id: number) {
    return await this.platformRepository.findOneBy({ id });
  }

  async update(id: number, updatePlatformDto: UpdatePlatformDto): Promise<Platform> {
    const platform = await this.findOne(id);
    if (!platform) {
      throw new NotFoundException(`Platform with ID ${id} not found`);
    }
    Object.assign(platform, updatePlatformDto);
    return await this.platformRepository.save(platform);
  }

  async remove(id: number) {
    return await this.platformRepository.delete(id)
  }
}
