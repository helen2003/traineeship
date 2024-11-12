import { ApiProperty } from "@nestjs/swagger";

export class AuthUserDto {

    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    readonly email: string;

    @ApiProperty({example: '12345', description: 'Пароль'})
    readonly password: string;
}