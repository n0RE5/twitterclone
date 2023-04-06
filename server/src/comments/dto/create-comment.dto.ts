import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDto {
    @ApiProperty({example: 'Hello world!', description: "comment content"})
    readonly content: string;

    @ApiProperty({example: '1', description: "User Id"})
    readonly userId: number;

    @ApiProperty({example: '1', description: "Post Id"})
    readonly postId: number;
}