import { ApiProperty } from "@nestjs/swagger";

export class CreateLikeDto {
    @ApiProperty({example: '1', description: "POST ID"})
    readonly postId: number;
}