import { provideRouter, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ProfileComponent } from '././pages/profile.component';
import { BooksComponent } from '././pages/books.component';
import { ProgressComponent } from './pages/progress.component';
// authentication
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'books', component: BooksComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'progress', component: ProgressComponent },
      { path: '', redirectTo: 'books', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'login' }
];

// export const router = provideRouter(routes);