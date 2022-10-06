import { Exclude } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';

export class BooksDTO {
  @Exclude({ toClassOnly: true })
  id: string;

  @Length(8, 64)
  name: string;

  @IsNotEmpty({ message: 'O campo price não pode ser nulo' })
  price: number;

  @Length(8, 64)
  description: string;

  constructor(partial: Partial<BooksDTO>) {
    Object.assign(this, partial);
  }
}
