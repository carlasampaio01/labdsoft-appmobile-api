import IEvent from "../../../infra/events/event.interface";
import EmailService from "../../../email/email.service";

export default class RecoverPassword implements IEvent {
  public static make = (email: string, password: string) =>
    new RecoverPassword(email, password);

  constructor(private email: string, private token: string) {
    this.email = email;
    this.token = token;
  }

  async handle(event: RecoverPassword) {
    await EmailService.send({
      email: event.email,
      name: "User",
      subject: "Password Recover Request",
      substitutions: {
        email: event.email,
        link: `${process.env.FRONTOFFICE}recover-password?email=${event.email}&token=${event.token}`
      },
      template: "d-1cb687f39e0341f1a48485c6b08c36ff"
    });
  }
}
