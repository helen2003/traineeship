import { ApiProperty } from "@nestjs/swagger";

export class ResponseCreateUserDto {

    @ApiProperty({example: '1', description: 'Идентификатор пользователя'})
    readonly idUser: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    readonly email: string;

    @ApiProperty({example: 'Иванов', description: 'Фамилия'})
    readonly firstName: string;

    @ApiProperty({example: 'Иван', description: 'Имя'})
    readonly name: string;

    @ApiProperty({example: 'USER', description: 'Роль пользователя'})
    readonly role: string;
}
