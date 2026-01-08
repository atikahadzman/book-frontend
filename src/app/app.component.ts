import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BookService } from './services/book.service';
import { Book } from './models/books';
import { ProfileService } from './services/profile.service';
import { Profile } from './models/profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [SidebarComponent, CommonModule, RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent implements OnInit {
//   books: Book[] = [];
//   profile: Profile | null = null;
//   title = 'Hello, ' + this.profile;

//   constructor(
//     private bookService: BookService,
//     private profileService: ProfileService
//   ) {}

//   ngOnInit(): void {
//     this.bookService.getAll().subscribe(data => {
//       this.books = data;
//     });

//     const id = '695d43c77ed31d27662f001b';
//     this.profileService.getById(id).subscribe(profile => {
//       this.profile = profile;
//     });
//   }
// }
