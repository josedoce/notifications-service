import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller("notifications")
export class AppController {
  //inversão de dependencia, no app.module, injetamos a dependencia...
  //constructor(private readonly mailService: MailService) {}
  constructor(private readonly prisma : PrismaService){}
  @Get()
  list() {
    //return this.mailService.sendEmail();
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody){
    const {content, category, recipientId} = body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId
      }
    })
  }
}
