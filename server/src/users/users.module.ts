import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';
import { UserRoles } from 'src/roles/user-roles.model';
import { Role } from 'src/roles/roles.model';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';
import { Subscription } from 'src/subscriptions/subscriptions.model';
import { Like } from 'src/likes/likes.model';
import { UserSubscriptions } from 'src/subscriptions/user-subscriptions.model';
import { Post } from 'src/posts/posts.model';
import { Comment } from 'src/comments/comments.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Post, Subscription, Like, UserSubscriptions, Comment]),
    RolesModule,
    forwardRef(() => AuthModule)
  ],
  exports: [
    UsersService,
  ]
})
export class UsersModule {}
