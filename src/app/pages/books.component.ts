import { Component,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { BookService } from '../services/book.service';
import { Book } from '../models/books';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    CommonModule, 
    MatTableModule
  ],
  templateUrl: './books.component.html',
})
export class BooksComponent {
  books$!: Observable<Book[]>;
  displayedColumns: string[] = ['title', 'author'];

  constructor(private bookService: BookService) {
    this.books$ = this.bookService.getAll();
  }
}
