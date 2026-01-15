import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PdfViewerModule, PDFDocumentProxy } from 'ng2-pdf-viewer';
import { AuthService } from '../services/auth.service';
import { BookService } from '../services/book.service';
import { ProgressService } from '../services/progress.service';
import { Book } from '../models/books';
import { Progress } from '../models/progress';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-books-reader',
  standalone: true,
  imports: [
    CommonModule,
    PdfViewerModule,
    MatButtonModule,
  ],
  templateUrl: './books-reader.component.html',
  styleUrl: './books-reader.component.css',
})
export class BooksReaderComponent implements OnInit {
  pdfUrl?: string;
  pdfTitle?: string;

  currentPage = 1;
  totalPages = 1;

  bookId?: string;

  // set default value for redirect the last page user read
  lastPage: number = 1;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private progressService: ProgressService,
    private authService: AuthService
  ) {}

  // ngOnInit(): void {
  //   this.bookId = this.route.snapshot.paramMap.get('id') || undefined;
  //   if (!this.bookId) {
  //     return;
  //   }

  //   this.route.paramMap.subscribe(params => {
  //     const id = params.get('id');
  //     if (!id) return;

  //     // Get the last-read page from query params
  //     const page = this.route.snapshot.queryParamMap.get('page');
  //     if (page) {
  //       this.lastPage = +page;
  //     }

  //     this.bookService.getById(id).subscribe(book => {
  //       if (book.bookUrl) {
  //         this.pdfUrl = `http://localhost:8080/uploads/${book.bookUrl}`;
  //         this.pdfTitle = book.title;
  //         // this.pdfUrl = `http://localhost:8080/uploads/${book.bookUrl}?t=${Date.now()}`;
  //         console.log('HEREE: ' + this.pdfUrl);
  //         console.log('title: ' + this.pdfTitle);
  //       }
  //     });
  //   });

  //   // this.loadBookmark();
  // }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id') || undefined;
    if (!this.bookId) return;

    this.route.queryParamMap.subscribe(q => {
      const page = q.get('page');
      this.currentPage = page ? +page : 1;
    });

    this.bookService.getById(this.bookId).subscribe(book => {
      if (book.bookUrl) {
        this.pdfUrl = `http://localhost:8080/uploads/${book.bookUrl}`;
        this.pdfTitle = book.title;
      }
    });
  }


  onPageChange(page: number) {
    this.currentPage = page;
  }

  onPdfLoad(pdf: PDFDocumentProxy) {
    this.totalPages = pdf.numPages;
  }

  jumpToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  bookmarkPage() {
    const userId = this.authService.getUserId();
    console.log('userId: ' + userId);

    if (!this.bookId) {
      return;
    }

    const progress: Partial<Progress> = {
      book_id: this.bookId,
      user_id: userId,
      current_page: this.currentPage,
      last_read_at: Date.now(),
    };

    this.progressService.saveProgress(progress).subscribe({
      next: () => alert(`Bookmark saved: Page ${this.currentPage}`),
      error: (err) => console.error('Failed to save bookmark', err)
    });
  }

  loadBookmark() {
    const userId = this.authService.getUserId();

    if (!this.bookId) {
      return;
    }

    this.progressService.getAll().subscribe(progressList => {
      const bookmark = progressList.find(p => p.book_id === this.bookId && p.user_id === userId);

      if (bookmark) {
        console.log('bookmark:' + JSON.stringify(bookmark));
        this.currentPage = bookmark.current_page;
      }
    });
  }
}
