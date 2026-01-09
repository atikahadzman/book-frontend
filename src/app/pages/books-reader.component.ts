import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-books-reader',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './books-reader.component.html',
})
export class BooksReaderComponent implements OnInit {

  pdfUrl!: string;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private bookService: BookService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
        console.error('Book ID is missing from route');
        return;
    }

    this.bookService.getById(id).subscribe(book => {
      this.pdfUrl = book.book_url;
      console.log('HEREE: ' + this.pdfUrl);
    });
  }
}
