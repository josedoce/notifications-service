import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule], //pode importar um mobulo que é importado por outros
  controllers: [NotificationsController],
  providers: [
    SendNotification
  ]
  //mas se o intuito é importar providers, é necessário dizer no outro modulo, quais serão os providers visiveis para outros modulos.
  
})
export class HttpModule {}