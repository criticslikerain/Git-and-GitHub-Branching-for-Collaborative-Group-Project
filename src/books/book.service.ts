import { AppDataSource } from "../_helper/db";
import { Book } from "./book.entity";

export class BookService {
  private bookRepository = AppDataSource.getRepository(Book);

  async addBook(book_name: string, book_author: string, book_category: string) {
    const newBook = this.bookRepository.create({ book_name, book_author, book_category });
    return this.bookRepository.save(newBook);
  }
}
