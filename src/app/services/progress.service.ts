import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Progress } from '../models/progress';

@Injectable({
  providedIn: 'root',
})

export class ProgressService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8080/api/readingprogress';

    // READ ALL
    getAll(): Observable<Progress[]> {
        return this.http.get<Progress[]>(this.apiUrl);
    }

    // READ BY ID
    getById(id: string): Observable<Progress> {
        return this.http.get<Progress>(`${this.apiUrl}/${id}`);
    }
}
