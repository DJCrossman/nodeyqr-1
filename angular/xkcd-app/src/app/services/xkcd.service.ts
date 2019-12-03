import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Comic } from '../models/comic';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class XkcdService {

  constructor(private http: HttpClient) { }

  getComicById(id: number): Observable<Comic> {
    return this.http.get<Comic>(`/api/${id}/info.0.json`);
  }

  findComics(): Observable<Comic[]> {
    return forkJoin(
      this.getComicById(1),
      this.getComicById(2),
      this.getComicById(3),
      this.getComicById(4),
      this.getComicById(5)
    );
  }
}
