import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth-guard';
import { CreateLikeDto } from './dto/create-like.dto';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
    constructor(private likeService: LikesService) {}

    @ApiOperation({summary: "Like Post"})
    @UseGuards(AuthGuard)
    @Post()
    create(@Body() dto: CreateLikeDto, @Req() req) {
        return this.likeService.like(dto, req)
    }

    @Get('/:postId')
    get(@Param('postId') postId: number) {
        return this.likeService.countAll(postId)
    }

    @ApiOperation({summary: "Check if post is liked"})
    @UseGuards(AuthGuard)
    @Post('/check')
    check(@Body() dto: CreateLikeDto, @Req() req) {
        return this.likeService.isLiked(dto, req)
    }
}
