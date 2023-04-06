import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth-guard';
import { Comment } from './comments.model';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {

    constructor(private commentService: CommentsService) {}

    @ApiOperation({summary: "Create Comment"})
    @ApiResponse({status: 200, type: Comment })
    @UseGuards(AuthGuard)
    @Post()
    create(@Body() dto: CreateCommentDto, @Req() req) {
        return this.commentService.create({...dto, userId: req.user.id})
    }

    @ApiOperation({summary: "Get Comments"})
    @ApiResponse({status: 200, type: Comment })
    @Get('/:postId')
    get(@Param('postId') postId: number) {
        return this.commentService.getAll(postId)
    }
}
