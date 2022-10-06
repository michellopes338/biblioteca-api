
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class BookInput {
    name: string;
    price: number;
    description: string;
}

export class Books {
    id: string;
    name: string;
    price: number;
    description: string;
}

export abstract class IQuery {
    abstract allBooks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Books>[]> | Promise<Nullable<Nullable<Books>[]>>;

    abstract oneBook(id: string): Nullable<Books> | Promise<Nullable<Books>>;
}

export abstract class IMutation {
    abstract insertBook(input?: Nullable<BookInput>): Nullable<Books> | Promise<Nullable<Books>>;
}

type Nullable<T> = T | null;
