import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthUserDto } from './dto/auth-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { user } from '@prisma/client';


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private userService: UsersService, private jwtService: JwtService) {}

    async login(authDto: AuthUserDto){
        const user = await this.validateUser(authDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto){
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (candidate){
            throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken(user: user) {
        const payload = {email: user.email, id: user.idUser, role: user.role}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: AuthUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message: 'Некорректный email или пароль'})
    }

}
