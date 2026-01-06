import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/books';

@Injectable({
  providedIn: 'root',
})

export class BookService {
  private http = inject(HttpClient);  // functional injection in Angular 21
  private apiUrl = 'http://localhost:8080/api/bookstore';

  // READ ALL
  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  // READ BY ID
  getById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  // CREATE
  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  // UPDATE
  update(id: string, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }

  // DELETE
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
