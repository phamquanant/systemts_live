import { Injectable } from '@nestjs/common';
import { CreateVpDto } from './dto/create-vp.dto';
import { UpdateVpDto } from './dto/update-vp.dto';

@Injectable()
export class VpsService {
  create(createVpDto: CreateVpDto) {
    return 'This action adds a new vp';
  }

  findAll() {
    return `This action returns all vps`;
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
