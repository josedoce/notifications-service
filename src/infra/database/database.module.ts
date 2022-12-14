import { Module } from "@nestjs/common";
import { NotificationRepository } from "src/application/repositories/notification-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationRepository } from "./prisma/repositories/prisma-notifications-repository";

@Module({
  providers: [PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationRepository
    }
  ],
  exports: [ //aqui digo que só um provider será compartilhado com outros modules.
    NotificationRepository,
  ]
})
export class DatabaseModule {}