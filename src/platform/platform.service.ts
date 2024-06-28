import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Platform } from '../entities/platform.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class PlatformService {
  constructor(
    @InjectRepository(Platform)
    private platformRepository: Repository<Platform>,
  ) {}
  //create platform
  async create(createPlatformDto: CreatePlatformDto, icon: Express.Multer.File): Promise<Platform> {
    createPlatformDto.icon = icon.path;
    const platform = this.platformRepository.create(createPlatformDto);

    return this.platformRepository.save(platform);
  }
  //list platform
  async findAll(datafilter:any): Promise<any> {
   
    const data = await this.platformRepository.findAndCount({
      skip:!isNaN(datafilter.offset)? datafilter.offset: 0,
      take:!isNaN(datafilter.limit)? datafilter.limit: 0,
      where: {name: Like(`%${datafilter.search??''}%`)}
    })
    return {
      data: data[0],
      total: data[1]
    }
  }
  // view details
  async findOne(id: number) {
    return await this.platformRepository.findOne({ 
      where: {id: id},
      relations: ['orders']
     });
  }
  //update platform
  async update(id: number, updatePlatformDto: UpdatePlatformDto): Promise<Platform> {
    const platform = await this.findOne(id);
    if (!platform) {
      throw new NotFoundException(`Platform with ID ${id} not found`);
    }
    Object.assign(platform, updatePlatformDto);
    console.log(updatePlatformDto);
    return await this.platformRepository.save(platform);
  }
  // remove platform
  async remove(id: number) {
    return await this.platformRepository.delete(id)
  }
}
