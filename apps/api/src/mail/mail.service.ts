import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private resend: Resend;

  constructor(private readonly config: ConfigService) {
    this.resend = new Resend(this.config.get<string>('RESEND_API_KEY'));
  }

  async sendContactNotification(submission: {
    name: string;
    email: string;
    organization?: string | null;
    service?: string | null;
    message: string;
    createdAt: Date;
  }) {
    const adminEmail = this.config.get<string>('ADMIN_EMAIL') || 'khadimul@inception23.com';

    await this.resend.emails.send({
      from: 'Portfolio <noreply@inception23.com>',
      to: adminEmail,
      subject: `New Inquiry: ${submission.name} — ${submission.service || 'General'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B1527;">New Portfolio Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #4A5568;">Name</td><td style="padding: 8px;">${submission.name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #4A5568;">Email</td><td style="padding: 8px;"><a href="mailto:${submission.email}">${submission.email}</a></td></tr>
            ${submission.organization ? `<tr><td style="padding: 8px; font-weight: bold; color: #4A5568;">Organization</td><td style="padding: 8px;">${submission.organization}</td></tr>` : ''}
            ${submission.service ? `<tr><td style="padding: 8px; font-weight: bold; color: #4A5568;">Service</td><td style="padding: 8px;">${submission.service}</td></tr>` : ''}
            <tr><td style="padding: 8px; font-weight: bold; color: #4A5568;">Submitted</td><td style="padding: 8px;">${submission.createdAt.toLocaleString()}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #FAFAF7; border-radius: 8px; border-left: 3px solid #A87818;">
            <p style="margin: 0; color: #1E2A3B;">${submission.message}</p>
          </div>
        </div>
      `,
    });
  }
}
