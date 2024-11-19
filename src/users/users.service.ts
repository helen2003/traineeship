import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ChangeRoleDto } from './dto/change-role.dto';
import * as bcrypt from 'bcryptjs';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.prisma.user.create({
      data: { ...userDto, password: hashPassword },
      //omit: {}
    });
    delete user['password'];
    return user;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { email: email } });
    return user;
  }

  async changeUserRole(changeRoleDto: ChangeRoleDto): Promise<User> {
    try {
      const user = await this.prisma.user.update({
        where: { id: changeRoleDto.userId },
        data: { role: changeRoleDto.role },
      });
      delete user['password'];
      return user;
    } catch (error) {
      throw new HttpException('Ошибка одновления роли', HttpStatus.BAD_REQUEST);
    }
  }
}
