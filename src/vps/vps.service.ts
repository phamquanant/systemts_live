import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVpDto } from './dto/create-vp.dto';
import { UpdateVpDto } from './dto/update-vp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vps } from '../entities/vps.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class VpsService {
  constructor(
    @InjectRepository(Vps)
    private vpsRepository: Repository<Vps>,
  ) {}
  async create(createVpDto: CreateVpDto) {
    return await this.vpsRepository.save(createVpDto);
  }
  async findAll(datafilter:any): Promise<any> {
    const data = await this.vpsRepository.findAndCount({
      skip:!isNaN(datafilter.offset)? datafilter.offset: 0,
      take:!isNaN(datafilter.limit)? datafilter.limit: 0,
      where: [
        {name: Like(`%${datafilter.search??''}%`)},
        {speed: Like(`%${datafilter.search??''}%`)},
        {total_memory: Like(`%${datafilter.search??''}%`)},
        {free_memory: Like(`%${datafilter.search??''}%`)},
        {port: Like(`%${datafilter.search??''}%`)}
      ]
      // && {total_memory :"16GB"}
    })
    return {
      data: data[0],
      total: data[1]
    }
  }

  async findOne(id: number): Promise<Vps> {
    const vps = await this.vpsRepository.findOneBy({ id });
    if (!vps) {
      throw new NotFoundException(`VPS with ID ${id} not found`);
    }
    return vps;
  }

  update(id: number, updateVpDto: UpdateVpDto) {
    return `This action updates a #${id} vp`;
  }

  remove(id: number) {
    return `This action removes a #${id} vp`;
  }
}
