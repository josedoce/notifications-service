import { Module } from '@nestjs/common';
import { AppModule } from './app.module';
import { MeuModule } from './meu.module';


//um module é basicamente um acoplador, ele acopla controllers e services.
//um module pode importar outros modules
@Module({
  imports: [
    //aqui importamos os modules.
    AppModule,
    MeuModule
  ],
  
})
export class HttpModule {}