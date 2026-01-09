import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
  id?: string;
  username: string;
  email: string;
  password: string;
  token?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _user?: any;

    private apiUrl = 'http://localhost:8080/api/user';

    constructor(private http: HttpClient) {}

    login(credentials: any) {
        return this.http.post('/api/login', credentials);
    }

    logout() {
        this._user = undefined;
        localStorage.removeItem('user'); // clear saved session if using localStorage
    }

    isLoggedIn(): boolean {
        return !!this._user || !!localStorage.getItem('user');
    }

    get user() {
        return this._user || JSON.parse(localStorage.getItem('user') || 'null');
    }
}
