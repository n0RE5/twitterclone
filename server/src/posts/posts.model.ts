import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Like } from "src/likes/likes.model";
import { User } from "src/users/users.model";
import { Comment } from "src/comments/comments.model"

interface PostCreationAttrs {
    content: string
    userId: number
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({example: '1', description: "ID"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Hello world!', description: "User Post Body"})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ForeignKey(() => User)
    userId: number

    @HasMany(() => Like)
    likes: Like[]

    @HasMany(() => Comment)
    comments: Comment[]
}