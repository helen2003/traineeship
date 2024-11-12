import { ApiProperty } from "@nestjs/swagger";

export class ChangeRoleDto {

    @ApiProperty({example: '1', description: 'Идентификатор пользователя'})
    readonly userId: number;

    @ApiProperty({type: 'string', example: 'USER', description: 'Роль пользователя'})
    readonly role: any;
}
