import { IsNotEmpty, IsUUID, Length } from "class-validator";


export class CreateNotificationBody {
    //para ser possivel validar, é necessário habilitar o validator no main
    @IsNotEmpty()
    @IsUUID()
    recipientId: string;

    @IsNotEmpty()
    @Length(5, 240)
    content: string;

    @IsNotEmpty()
    category: string;
}