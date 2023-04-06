import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Like } from "src/likes/likes.model";
import { Post } from "src/posts/posts.model";
import { User } from "src/users/users.model";

interface CommentCreationAttrs {
    content: string
    postId: number
    userId: number
}

@Table({tableName: 'comments'})
export class Comment extends Model<Comment, CommentCreationAttrs> {
    @ApiProperty({example: '1', description: "ID"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Hello world!', description: "User Post Body"})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ForeignKey(() => User)
    userId: number

    @ForeignKey(() => Post)
    postId: number
}