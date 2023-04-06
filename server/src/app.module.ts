import { forwardRef, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { Subscription } from "./subscriptions/subscriptions.model";
import { UserSubscriptions } from "./subscriptions/user-subscriptions.model";
import { LikesModule } from './likes/likes.module';
import { Like } from "./likes/likes.model";
import { FilesModule } from './files/files.module';
import * as path from "path";
import { ServeStaticModule } from '@nestjs/serve-static'
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { Post } from "./posts/posts.model";
import { Comment } from "./comments/comments.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static')
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            models: [User, Role, UserRoles, Subscription, UserSubscriptions, Like, Post, Comment],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        SubscriptionsModule,
        LikesModule,
        FilesModule,
        PostsModule,
        CommentsModule,
    ]
})

export class AppModule {

}