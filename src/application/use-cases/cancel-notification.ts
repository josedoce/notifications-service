import { Injectable } from "@nestjs/common";
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notification-repository";
import { NotificationNotFound } from "./errors/notification-not-found";

interface ICancelNotificationRequest {
  notificationId: string;
}

type ICancelNotificationResponse = void
@Injectable()
export class CancelNotification {

  constructor(
    private notificationRepository: NotificationRepository
  ){}

  async execute(request: ICancelNotificationRequest): Promise<ICancelNotificationResponse>{
    const { notificationId } = request;
    
    const notification = await this.notificationRepository.findById(notificationId);
    if(!notification){
      throw new NotificationNotFound()
    }
    
    notification.cancel()
    await this.notificationRepository.save(notification)
  } 
}