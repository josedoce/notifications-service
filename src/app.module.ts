import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail-service';
import { PostmarkMailService } from './mail/postmark-mail-service';
import { SMTPMail } from './mail/smtp-mail-service';
import { PrismaService } from './prisma.service';


//um module é basicamente um acoplador, ele acopla controllers e services.
//um module pode importar outros modules
@Module({
  imports: [
    //aqui importamos os modules.
    
  ],
  controllers: [AppController],
  //providers: [AppService], para definir o service
  providers: [
    PrismaService,
    {
      provide: MailService,//interface
      useClass: PostmarkMailService//classe
    }
  ]
})
export class AppModule {}
