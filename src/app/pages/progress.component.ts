import { Component,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressService } from '../services/progress.service';
import { Progress } from '../models/progress';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  // selector: 'app-progress',
  standalone: true,
  imports: [
    CommonModule, 
    MatBadgeModule, 
    MatButtonModule, 
    MatIconModule, 
    MatCardModule, 
    MatTableModule
  ],
  template: `<h1>Progress</h1>
    <ul *ngIf="progress; else loading">
        <li *ngFor="let prog of progress">
            {{ prog.book_id }}
        </li>
    </ul>

    <ng-template #loading>
        <p>Loading progress...</p>
    </ng-template>
  `
})
export class ProgressComponent implements OnInit {
  progress: Progress[] = [];
  // displayedColumns: string[] = ['title', 'status'];

  constructor(private progressService: ProgressService) {}
  
  ngOnInit() {
    this.progressService.getAll().subscribe(data => {
      this.progress = data;
    });
  }
}
