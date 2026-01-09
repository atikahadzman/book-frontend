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
  credentials = {
    email: '',
    password: ''
  };
  email = '';
  password = '';
  error = '';
  authService: any;
  
  constructor(
    private auth: AuthService, 
    private router: Router
  ) {
  }

  onSubmit() {
    this.authService.login(this.credentials).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
