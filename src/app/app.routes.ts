import { Routes } from '@angular/router';
import { ProfileComponent } from '././pages/profile.component';
import { BooksComponent } from '././pages/books.component';
import { ProgressComponent } from '././pages/progress.component';

export const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'books', component: BooksComponent },
  { path: 'progress', component: ProgressComponent }
];
