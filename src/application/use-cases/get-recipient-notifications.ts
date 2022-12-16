import { Injectable } from "@nestjs/common";
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface IGetRecipientNotificationRequest {
  recipientId: string;
}

interface IGetRecipientNotificationResponse {
  notifications: Notification[]
}

@Injectable()
export class GetRecipientNotification {

  constructor(
    private notificationRepository: NotificationRepository
  ){}

  async execute(request: IGetRecipientNotificationRequest): Promise<IGetRecipientNotificationResponse>{
    const { recipientId } = request;
    
    const notifications = await this.notificationRepository.findManyByRecipientId(recipientId);
    return {
      notifications
    }
  } 
}