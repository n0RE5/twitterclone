import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({example: 'Hello world!', description: "post content"})
    readonly content: string;

    @ApiProperty({example: '1', description: "User Id"})
    readonly userId: number;
}