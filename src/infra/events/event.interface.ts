export default interface IEvent {
  handle(value: any): Promise<void> | void;
}
