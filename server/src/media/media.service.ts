import { Injectable } from '@nestjs/common';
import { Media } from '@prisma/client'; // Тип Media, сгенерированный Prisma
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MediaService {
  constructor(private readonly prisma: PrismaService) {}

  async saveMedia(file: Express.Multer.File, caption: string | null, mediaType: string): Promise<Media> {
    const newMedia = await this.prisma.media.create({
      data: {
        fileName: file.filename,
        caption: caption,
        mediaType: mediaType,
        url: `/uploads/${file.filename}`,
      },
    });
    return newMedia;
  }

  async getMediaById(id: number): Promise<Media | null> {
    return this.prisma.media.findUnique({
      where: { id },
    });
  }
}
