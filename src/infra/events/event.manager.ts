import IEvent from './event.interface';
import { TypedEvent } from './event.typed';

export default class EventManager {
  public static make = (): EventManager => new EventManager();

  public publish<T>(event: IEvent): void {
    const eventEmitter = new TypedEvent<IEvent>();
    this.beforePublish(eventEmitter, event);
    eventEmitter.emit(event);
  }

  private beforePublish = (eventEmitter: TypedEvent<IEvent>, event: IEvent) =>
    eventEmitter.on(event.handle);
}
