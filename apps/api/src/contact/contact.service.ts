import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mail: MailService,
  ) {}

  async create(dto: CreateContactDto) {
    const submission = await this.prisma.contactSubmission.create({
      data: dto,
    });

    await this.mail.sendContactNotification(submission).catch((err) => {
      console.error('Mail send failed:', err);
    });

    return { success: true, message: 'Your message has been received. We will be in touch shortly.' };
  }
}
