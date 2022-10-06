import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { PrismaClientService } from '../prisma-client-service';

@Module({
  providers: [BooksResolver, BooksService, PrismaClientService],
})
export class BooksModule {}
