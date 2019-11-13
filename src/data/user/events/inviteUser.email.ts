import IEvent from "../../../infra/events/event.interface";
import EmailService from "../../../email/email.service";

export default class InviteUser implements IEvent {
  public static make = (email: string, password: string, name: string) =>
    new InviteUser(email, password, name);

  constructor(
    private email: string,
    private password: string,
    private name: string
  ) {
    this.email = email;
    this.password = password;
    this.name = name;
  }

  async handle(event: InviteUser) {
    await EmailService.send({
      email: event.email,
      name: event.name,
      subject: "You have been invited to manage the content of Saint James Way",
      substitutions: {
        name: event.name,
        email: event.email,
        password: event.password
      },
      template: "d-c828edcf71fb4c82b79682a3ca6b247d"
    });
  }
}
