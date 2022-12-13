import { Controller, Get } from "@nestjs/common";

@Controller()
export class MeuController {

  @Get("/meu")
  getMeu(): string {
    return "Testando o modulos."
  }

}
