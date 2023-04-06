import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Like } from 'src/likes/likes.model';
import { Comment } from 'src/comments/comments.model';
import { AuthModule } from 'src/auth/auth.module';
import { Post } from './posts.model';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    SequelizeModule.forFeature([User, Like, Comment, Post]),
    AuthModule
  ],
})
export class PostsModule {}
