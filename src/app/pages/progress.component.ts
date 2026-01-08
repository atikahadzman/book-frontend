import { Component,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProgressService } from '../services/progress.service';
import { Progress } from '../models/progress';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [
    CommonModule, 
    MatBadgeModule, 
    MatButtonModule, 
    MatIconModule, 
    MatCardModule, 
    MatTableModule
  ],
  templateUrl: './progress.component.html',
})
export class ProgressComponent {
  progress$!: Observable<Progress[]>;
  displayedColumns: string[] = ['Title', 'Progress', 'Status'];

  constructor(private progresService: ProgressService) {
    this.progress$ = this.progresService.getAll();
  }
}
