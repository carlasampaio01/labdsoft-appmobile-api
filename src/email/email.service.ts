import * as SendGrid from '@sendgrid/mail';
import IEmail from './email.interface';
import { EmailData } from '@sendgrid/helpers/classes/email-address';

SendGrid.setApiKey(process.env.SENDGRID_API_KEY);
SendGrid.setSubstitutionWrappers('{{', '}}');

const buildEmailAddress = (name: string, email: string): EmailData => ({
  name,
  email
});

const send = async (data: IEmail) => {
  const emailData = {
    subject: data.subject,
    to: buildEmailAddress(data.name, data.email),
    from: buildEmailAddress(
      process.env.SENDGRID_SENDER_NAME,
      process.env.SENDGRID_SENDER_EMAIL
    ),
    templateId: data.template,
    dynamic_template_data: data.substitutions
  };

  await SendGrid.send(emailData);
};

export default {
  send
};
