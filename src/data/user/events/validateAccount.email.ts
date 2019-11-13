import IEvent from "../../../infra/events/event.interface";
import EmailService from "../../../email/email.service";

export default class ValidateAccount implements IEvent {
  public static make = (user: any) => new ValidateAccount(user);

  constructor(private user: any) {
    this.user = user;
  }

  async handle(event: ValidateAccount) {
    await EmailService.send({
      email: event.user.email,
      name: event.user.name,
      subject: "Validate your flourister account",
      substitutions: {
        name: event.user.name,
        link: `${process.env.FRONTOFFICE}external/validate?email=${event.user.email}&id=${event.user._id}`
      },
      template: "d-4bfc5562548a4051aa7fc8551ab8f670"
    });
  }
}
