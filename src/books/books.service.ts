import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception';
import { QueryLimit } from 'src/interfaces/query-limit';
import { PrismaClientService } from 'src/prisma-client-service';
import { BooksDTO } from './books.dto';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaClientService) {}

  private async checkExistance({ ...where }): Promise<boolean> {
    const isBook = await this.prisma.books.findFirst({ where });
    return !!isBook;
  }

  async allBooks({ limit = 20, offset = 0 }: QueryLimit): Promise<BooksDTO[]> {
    const books = await this.prisma.books.findMany({
      take: limit,
      skip: offset,
    });

    return books.map((book: BooksDTO) => new BooksDTO(book));
  }

  /**
   * this method return create a new book
   * @param book entity
   * @returns object referece
   */
  async insertBook(book: BooksDTO): Promise<BooksDTO> {
    const isBookExistent = await this.checkExistance({ name: book.name });
    console.log(isBookExistent);

    if (isBookExistent) throw new BadRequestException('Esse livro já existe');

    const createdBook = await this.prisma.books.create({ data: book });

    return new BooksDTO(createdBook);
  }
}
