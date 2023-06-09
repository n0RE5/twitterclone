import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UserSubscriptions } from './user-subscriptions.model';
import { Subscription } from './subscriptions.model';

@Injectable()
export class SubscriptionsService {

    constructor(@InjectModel(UserSubscriptions) private subscriptionRepository: typeof UserSubscriptions, @InjectModel(Subscription) private subRepository: typeof Subscription) {}

    async subscribe(dto: CreateSubscriptionDto, req: any) {
        const userSub = await this.subRepository.findOne({where: {userId: req.user.id}})
        const candidate = await this.subscriptionRepository.findOne({where: {userId: dto.userId, subscriptionId: userSub.id}})
        if (candidate) {
            throw new HttpException("You already subscribed to this user", HttpStatus.BAD_REQUEST)
        }
        const subscribe = await this.subscriptionRepository.create({...dto, subscriptionId: userSub.id})
        return subscribe
    }

    async unsubscribe(dto: CreateSubscriptionDto, req: any) {
        const userSub = await this.subRepository.findOne({where: {userId: req.user.id}})
        const candidate = await this.subscriptionRepository.findOne({where: {userId: dto.userId, subscriptionId: userSub.id}})
        if (!candidate) {
            throw new HttpException("You aren't subscribed to this user", HttpStatus.BAD_REQUEST)
        }
        const unsubscribe = await this.subscriptionRepository.destroy({where: {userId: dto.userId, subscriptionId: userSub.id}})
        return unsubscribe
    }

    async isSubscribed(dto: CreateSubscriptionDto, req: any) {
        const userSub = await this.subRepository.findOne({where: {userId: req.user.id}})
        const candidate = await this.subscriptionRepository.findOne({where: {userId: dto.userId, subscriptionId: userSub.id}})
        if (!candidate) {
            return false
        }
        return true
    }

    async getUserSubscriptions(req: any) {
        const userSub = await this.subRepository.findOne({where: {userId: req.user.id}})
        const subs = await this.subscriptionRepository.findAll({where: {subscriptionId: userSub.id}})
        return subs
    }

    async countSubscribers(userId: number) {
        const subs = await this.subscriptionRepository.count({where: {userId}})
        return subs
    }

    async countSubscriptions(userId: number) {
        const userSub = await this.subRepository.findOne({where: {userId}})
        if (!userSub) {
            return 0
        }
        const subs = await this.subscriptionRepository.count({where: {subscriptionId: userSub.id}})
        return subs
    }
}
