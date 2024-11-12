import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProductDto {

    @ApiProperty({example: 'Портрет Дориана Грея', description: 'Наименование товара'})
    @IsString()
    readonly nameProduct: string;

    @ApiProperty({example: 'Портрет Дориана Грея — самое знаменитое произведение Оскара Уайльда', description: 'Описание товара'})
    readonly description: string;

    @ApiProperty({example: '1', description: 'Идентификатор автора товара'})
    readonly authorId: number;

    @ApiProperty({example: '1', description: 'Идентификатор категории товара'})
    readonly categoryId: number;
}
