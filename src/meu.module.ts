import { Module } from '@nestjs/common';

import { MeuController } from './meu.controller';


//um module é basicamente um acoplador, ele acopla controllers e services.
//um module pode importar outros modules
@Module({
  controllers: [
    MeuController
  ]
})
export class MeuModule {}