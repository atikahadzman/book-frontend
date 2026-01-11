import { Component,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/books';
import { Observable, BehaviorSubject, combineLatest, map } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    CommonModule, 
    MatTableModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  books$!: Observable<Book[]>;

  private allBooks$ = new BehaviorSubject<Book[]>([]);
  searchTerm$ = new BehaviorSubject<string>('');

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

  ngOnInit() {
    this.bookService.getAll().subscribe((books) => {
      this.allBooks$.next(books);
    });

    // book filter by title or author
    this.books$ = combineLatest([this.allBooks$, this.searchTerm$]).pipe(
      map(([books, term]) =>
        books.filter((book) =>
          book.title.toLowerCase().includes(term.toLowerCase()) ||
          book.author.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }

  onSearchChange(value: string) {
    this.searchTerm$.next(value);
  }

  openBook(bookId: number) {
    window.open(`/books/${bookId}/read`, '_blank');
  }
}
