import {
  Controller,
  Post,
  Body,
  Put,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ChangeRoleDto } from './dto/change-role.dto';
import { ValidationPipe } from 'src/common/pipes/validation.pipes';
import { ResponseCreateUserDto } from './dto/response-create-user.dto';
import { User } from '@prisma/client';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: ResponseCreateUserDto })
  // @UsePipes(ValidationPipe)
  @Post()
  create(@Body() userDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Обновление роли позьзователя' })
  @Put('/role')
  changeRole(@Body() changeRoleDto: ChangeRoleDto): Promise<User> {
    return this.usersService.changeUserRole(changeRoleDto);
  }
}
