import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './comments.model';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment) private commentsRepository: typeof Comment) {}

    async create(dto: CreateCommentDto) {
        const comment = await this.commentsRepository.create(dto)
        return comment
    }

    async getAll(postId: number) {
        const comments = await this.commentsRepository.findAll({where: {postId}})
        return comments
    }
}
