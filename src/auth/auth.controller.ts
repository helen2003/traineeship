import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth-user.dto';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Идентификация и аутентификация'})
    @Post('/login')
    login(@Body() authDto: AuthUserDto) {
        return this.authService.login(authDto)
    }

    @ApiOperation({summary: 'Регистрация'})
    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }

}
