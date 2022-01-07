import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private _http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this._http.get<Book[]>('http://localhost:3000/books');
  }

  getBook(id: number): Observable<Book> {
    return this._http.get<Book>(`http://localhost:3000/books/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this._http.post<Book>('http://localhost:3000/books', book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this._http.put<Book>(`http://localhost:3000/books/${book.id}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this._http.delete<Book>(`http://localhost:3000/books/${id}`);
  }
}
