import { MailService } from "./mail-service";
import { Injectable } from '@nestjs/common';

//é necessário para que seja injetado.
@Injectable()
export class SMTPMail implements MailService{
    sendEmail(): string {
        return 'smtp mail';
    }

}