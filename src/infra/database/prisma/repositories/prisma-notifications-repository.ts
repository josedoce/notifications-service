import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Notification } from "../../../../../src/application/entities/notification";
import { NotificationRepository } from "../../../../../src/application/repositories/notification-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class  PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService){}
  async create(notification: Notification): Promise<void> {
    const {id, category, content, readAt, recipientId, createdAt} = notification;
    await this.prismaService.notification.create({
      data: {
        id,
        content: content.value,
        category,
        recipientId,
        readAt,
        createdAt
      }
    })
  }
}