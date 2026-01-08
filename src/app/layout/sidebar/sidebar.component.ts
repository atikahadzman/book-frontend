import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [
    RouterLink, 
    RouterLinkActive,
    MatIconModule,   
    MatSidenavModule,
  ],
  styleUrl: './sidebar.component.css',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {}
