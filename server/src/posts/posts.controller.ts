import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth-guard';
import { Post as _Post }  from './posts.model';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) {}

    @ApiOperation({summary: "Create Post"})
    @ApiResponse({status: 200, type: _Post })
    @UseGuards(AuthGuard)
    @Post()
    create(@Body() dto: CreatePostDto, @Req() req) {
        return this.postsService.create({...dto, userId: req.user.id})
    }

    @ApiOperation({summary: "Get Post"})
    @ApiResponse({status: 200, type: _Post })
    @Get('/:id')
    get(@Param('id') id: number) {
        return this.postsService.get(id)
    }

    @ApiOperation({summary: "Get All Posts"})
    @ApiResponse({status: 200, type: [_Post] })
    @Get()
    getAll(@Param('id') id: number) {
        return this.postsService.getAll()
    }

    @ApiOperation({summary: "Get All User Posts"})
    @ApiResponse({status: 200, type: [_Post] })
    @Get('/user/:userId')
    getUserPosts(@Param('userId') userId: number) {
        return this.postsService.getUserPosts(userId)
    }
}
