import { Component,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { BookService } from '../services/book.service';
import { Book } from '../models/books';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    CommonModule, 
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  books$!: Observable<Book[]>;
  displayedColumns: string[] = [
    'cover_image',
    'author', 
    'category',
    'total_pages', 
    'action', 
  ];

  constructor(private bookService: BookService) {
    this.books$ = this.bookService.getAll();
  }
}
