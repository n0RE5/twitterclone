import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Post } from 'src/posts/posts.model';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';
import { Comment } from './comments.model';

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
  imports: [
    SequelizeModule.forFeature([User, Post, Comment]),
    AuthModule
  ]
})
export class CommentsModule {}
