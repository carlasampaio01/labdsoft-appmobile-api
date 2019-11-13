export default interface IEmail {
  name: string;
  email: string;
  subject: string;
  template: string;
  substitutions: { [key: string]: string };
}
