import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BookService } from './services/book.service';
import { Book } from './models/books';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // imports: [CommonModule],
})
export class AppComponent implements OnInit {
  title = 'Bookstore';
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getAll().subscribe(data => {
      this.books = data;
    });
  }
}
