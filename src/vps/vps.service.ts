import { Injectable } from '@nestjs/common';
import { CreateVpDto } from './dto/create-vp.dto';
import { UpdateVpDto } from './dto/update-vp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vps } from './entities/vps.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VpsService {
  constructor(
    @InjectRepository(Vps)
    private vpsRepository: Repository<Vps>,
  ) {}
  async create(createVpDto: CreateVpDto) {
    return await this.vpsRepository.save(createVpDto);
  }

  async findAll() {
    return await this.vpsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} vp`;
  }

  update(id: number, updateVpDto: UpdateVpDto) {
    return `This action updates a #${id} vp`;
  }

  remove(id: number) {
    return `This action removes a #${id} vp`;
  }
}
