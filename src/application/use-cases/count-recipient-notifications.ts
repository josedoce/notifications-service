import { Injectable } from "@nestjs/common";
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface ICountRecipientNotificationRequest {
  recipientId: string;
}

interface ICountRecipientNotificationResponse {
  count: number
}

@Injectable()
export class CountRecipientNotification {

  constructor(
    private notificationRepository: NotificationRepository
  ){}

  async execute(request: ICountRecipientNotificationRequest): Promise<ICountRecipientNotificationResponse>{
    const { recipientId } = request;
    
    const count = await this.notificationRepository.countManyByRecipientId(recipientId);
    return {
      count
    }
  } 
}