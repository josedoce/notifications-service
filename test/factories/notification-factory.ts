import { Content } from "@application/entities/content"
import { INotification, Notification } from "@application/entities/notification"

/**
 * Factory é um padrão que busca gerenciar coisas
 * repetitivas, como objetos, etc...
 */

//o Partial diz que todos os dados são opcionais.
type Override = Partial<INotification>

export function makeNotification(override: Override={}){
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    recipientId: 'recipient-2',
    ...override
  })
}