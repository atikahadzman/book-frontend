import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PdfViewerModule, PDFDocumentProxy } from 'ng2-pdf-viewer';
import { BookService } from '../services/book.service';
import { Book } from '../models/books';

@Component({
  selector: 'app-books-reader',
  standalone: true,
  imports: [
    CommonModule,
    PdfViewerModule
  ],
  templateUrl: './books-reader.component.html',
  styleUrl: './books-reader.component.css',
})
export class BooksReaderComponent implements OnInit {
  pdfUrl?: string;
  pdfTitle?: string;

  currentPage = 1;
  totalPages = 1;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id) return;

      this.bookService.getById(id).subscribe(book => {
        if (book.bookUrl) {
          this.pdfUrl = `http://localhost:8080/uploads/${book.bookUrl}`;
          console.log('HEREE: ' + this.pdfUrl);
        }
      });
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onPdfLoad(pdf: PDFDocumentProxy) {
    this.totalPages = pdf.numPages;
  }
}
