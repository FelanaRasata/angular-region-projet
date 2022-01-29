import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etat } from '../interface/etat';

@Injectable({
  providedIn: 'root'
})
export class EtatService {

  private baseURL = "http://localhost:8080/api/etat";

  constructor(private httpClient: HttpClient) { }

  getEtat(): Observable<Etat[]> {
    return this.httpClient.get<Etat[]>(this.baseURL);
  }

  getEtatId(id: number): Observable<Etat> {
    return this.httpClient.get<Etat>(`${this.baseURL}/${id}`);
  }
}
