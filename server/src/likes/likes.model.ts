import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { User } from "src/users/users.model";

interface LikeCreationAttrs {
    userId: number;
    postId: number;
}

@Table({tableName: 'likes'})
export class Like extends Model<Like, LikeCreationAttrs> {
    @ApiProperty({example: '1', description: "ID"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    userId: number

    @ForeignKey(() => Post)
    postId: number
}