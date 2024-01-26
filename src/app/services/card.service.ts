import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from 'src/app/Card';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class cardService {
  constructor(private http: HttpClient) {}

  addCard(newCard: Card): Observable<Card> {
    const url = `http://localhost:5000/${newCard.set}`;
    return this.http.post<Card>(url, newCard, httpOptions);
  }
}
