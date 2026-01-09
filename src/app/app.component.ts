import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './services/book.service';
import { Book } from './models/books';
import { ProfileService } from './services/profile.service';
import { Profile } from './models/profile';
// import { GreetingComponent } from './layout/greeting/greeting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    SidebarComponent, 
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MaterialModule, 
    MatBadgeModule,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  collapsed = false;
}
