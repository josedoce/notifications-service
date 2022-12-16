import { Content } from "./content"
import { Notification } from "./notification"

describe('Notification', ()=>{
  it("should be able to create a notification", ()=>{
    const notification = new Notification({
      content: new Content("Nova solicitação de amizade"),
      category: 'social',
      recipientId: 'ksssssssssssssssssssssss'
    });
    //parei aqui https://youtu.be/xbky26BIJT0?t=2845
    expect(notification).toBeTruthy();
  })
})