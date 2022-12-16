import { Injectable } from "@nestjs/common";
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface IReadNotificationRequest {
  notificationId: string;
}

type IReadNotificationResponse = void
@Injectable()
export class ReadNotification {

  constructor(
    private notificationRepository: NotificationRepository
  ){}

  async execute(request: IReadNotificationRequest): Promise<IReadNotificationResponse>{
    const { notificationId } = request;
    
    const notification = await this.notificationRepository.findById(notificationId);
    if(!notification){
      throw new NotificationNotFound()
    }
    
    notification.read()
    await this.notificationRepository.save(notification)
  } 
}