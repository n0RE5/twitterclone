import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post) {}

    async create(dto: CreatePostDto) {
        const post = await this.postRepository.create({content: dto.content, userId: dto.userId})
        return post
    }

    async get(id: number) {
        const post = await this.postRepository.findOne({where: {id}})
        return post
    }

    async getAll() {
        const posts = await this.postRepository.findAll()
        return posts
    }

    async getUserPosts(userId: number) {
        const posts = await this.postRepository.findAll({where: {userId}})
        return posts
    }
}
