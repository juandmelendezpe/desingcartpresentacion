import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private http = inject(HttpClient);
    private dataUrl = 'assets/data.json';

    getProfile(): Observable<any> {
        return this.http.get<any>(this.dataUrl);
    }
}
