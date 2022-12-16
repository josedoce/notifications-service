import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";
import { ReadNotification } from "./read-notification";
import { UnreadNotification } from "./unread-notification";

describe('Read notification', ()=>{
  it('should be able to unread a notification', async ()=>{
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationRepository);

    const notification = makeNotification({
      readAt: new Date()
    })
    
    await notificationRepository.create(notification)
    await unreadNotification.execute({
      notificationId: notification.id
    });


    expect(notificationRepository.notifications[0].readAt).toBeNull()
  });

  it('should not be able to unread a non existing notification', async ()=>{
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationRepository);
    
    expect(()=>{
      return unreadNotification.execute({
        notificationId: 'fake-notification-id'
      })
    }).rejects.toThrow(NotificationNotFound)
  })
});