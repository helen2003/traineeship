import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { ChangeRoleDto } from './dto/change-role.dto';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(userDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(userDto.password, 5)
    const user = await this.prisma.user.create({ data: {...userDto, password: hashPassword} });
    delete user['password'];
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email: email } });
    return user;
  }

  async changeUserRole(changeRoleDto: ChangeRoleDto){
    try {      
      const user = await this.prisma.user.update({where: {idUser: changeRoleDto.userId}, data: {role: changeRoleDto.role}})
      delete user['password'];
      return user
    } catch (error) {
      throw new HttpException('Ошибка одновления роли', HttpStatus.BAD_REQUEST);
    }
  }
}
