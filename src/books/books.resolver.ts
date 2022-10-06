import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QueryLimit } from 'src/interfaces/query-limit';
import { BooksDTO } from './books.dto';
import { BooksService } from './books.service';

@Resolver('Book')
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query()
  async allBooks(@Args() queryLimit: QueryLimit): Promise<BooksDTO[]> {
    return await this.booksService.allBooks(queryLimit);
  }

  @Mutation()
  async insertBook(@Args('input') book: BooksDTO): Promise<BooksDTO> {
    return await this.booksService.insertBook(book);
  }
}
