import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  async findAll(datafilter:any): Promise<any> {
   
    const data = await this.userRepository.findAndCount({
      skip:!isNaN(datafilter.offset)? datafilter.offset: 0,
      take:!isNaN(datafilter.limit)? datafilter.limit: 0,
      where: [
        {email: Like(`%${datafilter.search??''}%`)},
        {firstname: Like(`%${datafilter.search??''}%`)},
        {lastname: Like(`%${datafilter.search??''}%`)}
      ]
    })
    return {
      data: data[0],
      total: data[1]
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
