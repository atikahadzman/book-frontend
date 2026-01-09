import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService, 
    private router: Router
  ) {
  }

  login() {
    const credentials = { 
      username: this.username, 
      password: this.password 
    };

    this.auth.login(credentials).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        console.error('Login failed', err);
        alert('Login failed');
      }
    });
  }
}
