import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <nav>
        <h2>
          <a routerLink="/" routerLinkActive="active">
            Dashboard
          </a>
        </h2>
        <a routerLink="/profile" routerLinkActive="active">Profile</a>
        <a routerLink="/books" routerLinkActive="active">Books List</a>
        <a routerLink="/progress" routerLinkActive="active">Progress</a>
      </nav>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 220px;
      background: #2c3e50;
      color: white;
      padding: 20px;
    }
    nav a {
      display: block;
      color: white;
      padding: 10px;
      text-decoration: none;
      border-radius: 4px;
    }
    nav a.active,
    nav a:hover {
      background: #34495e;
    }
  `]
})
export class SidebarComponent {}
