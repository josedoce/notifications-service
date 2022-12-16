import { Injectable } from "@nestjs/common";
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface IUnreadNotificationRequest {
  notificationId: string;
}

type IUnreadNotificationResponse = void
@Injectable()
export class UnreadNotification {

  constructor(
    private notificationRepository: NotificationRepository
  ){}

  async execute(request: IUnreadNotificationRequest): Promise<IUnreadNotificationResponse>{
    const { notificationId } = request;
    
    const notification = await this.notificationRepository.findById(notificationId);
    if(!notification){
      throw new NotificationNotFound()
    }
    
    notification.unread()
    await this.notificationRepository.save(notification)
  } 
}