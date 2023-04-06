import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { UserRoles } from "src/roles/user-roles.model";
import { Role } from "src/roles/roles.model";
import { Subscription } from "src/subscriptions/subscriptions.model";
import { Like } from "src/likes/likes.model";
import { UserSubscriptions } from "src/subscriptions/user-subscriptions.model";
import { Post } from "src/posts/posts.model";
import { Comment } from "src/comments/comments.model";

interface UserCreationAttrs {
    username: string;
    secondname: string;
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: "ID"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'USER', description: "Username"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    username: string;

    @ApiProperty({example: '@user', description: "Secondname"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    secondname: string;

    @ApiProperty({example: 'user@mail.com', description: "Email"})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'img.jpg', description: "Avatar"})
    @Column({type: DataType.STRING, defaultValue: ""})
    profileImg: string;

    @ApiProperty({example: 'img.jpg', description: "User Banner image"})
    @Column({type: DataType.STRING, defaultValue: ""})
    bannerImg: string;

    @ApiProperty({example: '1t7bftadf7bad', description: "Hashed Password"})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]

    @HasOne(() => Subscription)
    subscriptions: Subscription

    @HasMany(() => Like)
    likes: Like[]

    @HasMany(() => Post)
    posts: Post[]
    
    @HasMany(() => Comment)
    comments: Comment[]

    @HasMany(() => UserSubscriptions)
    user_subscriptions: UserSubscriptions[]
}