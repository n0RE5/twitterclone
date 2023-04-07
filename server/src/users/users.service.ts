import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { Role } from 'src/roles/roles.model';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { Subscription } from 'src/subscriptions/subscriptions.model';
import { Op, Sequelize } from 'sequelize';
import { UserSubscriptions } from 'src/subscriptions/user-subscriptions.model';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService, @InjectModel(Subscription) private subscriptionRepository: typeof Subscription, private fileService: FilesService) {}

    async createUser(dto: CreateUserDto) {
         const user = await this.userRepository.create(dto)
         const createSubscriptionList = await this.subscriptionRepository.create({userId: user.id})
         const role = await this.roleService.getRoleOrCreate("USER")
         await user.$set('roles', [role.id])
         user.roles = [role]
         return user
    }

    async editUser(dto: CreateUserDto, files: any, req: any) {
        const user = await this.userRepository.findOne({where: {id: req.user.id}})
        const candidate_username = await this.userRepository.findOne({where: {username: dto.username}})
        const candidate_secondname = await this.userRepository.findOne({where: {secondname: dto.secondname}})
        if (candidate_username || candidate_secondname) {
            throw new HttpException('User with this name already exists', HttpStatus.BAD_REQUEST)
        }
        const bannerImg = await this.fileService.createFile(files[0], '.jpg')
        const profileImg = await this.fileService.createFile(files[1], '.jpg')

        await user.update({bannerImg, profileImg})

        if (dto.username) {
            await user.update({username: dto.username})
        }

        if (dto.secondname) {
            await user.update({secondname: dto.secondname})
        }
 
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAndCountAll({include: {all: true}})
        return users
    }

    async getUser(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user
    }

    async getUserById(id: number) {
        const user = await this.userRepository.findOne({
            where: {id},
            attributes: [
                'id', 'profileImg', 'bannerImg', 'username', 'secondname'
            ]
        })
        return user
    }

    async searchUser(query: string) {
        const user = await this.userRepository.findOne({where: {username: { [Op.like]: '%' + query + '%' }}, attributes: ['id']})
        return user
    }
}
