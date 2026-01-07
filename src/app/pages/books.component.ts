import { Component,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';
import { Book } from '../models/books';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Books List</h1>

    <ul *ngIf="books; else loading">
      <li *ngFor="let book of books">
        <strong>{{ book.title }}</strong> — {{ book.author }}
      </li>
    </ul>
    
    <ng-template #loading>
      <p>Loading books...</p>
    </ng-template>
  `
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getAll().subscribe(data => {
      this.books = data;
    });
  }
}
