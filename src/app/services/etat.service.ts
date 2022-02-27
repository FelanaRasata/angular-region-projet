import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etat } from '../interface/etat';

@Injectable({
  providedIn: 'root'
})
export class EtatService {

  private baseURL = "https://spring-projet.herokuapp.com/api/etat/afficher";
  private baseURLchangement = "https://spring-projet.herokuapp.com/api/etat/changement";

  constructor(private httpClient: HttpClient) { }

  getEtat(): Observable<Etat[]> {
    return this.httpClient.get<Etat[]>(this.baseURL);
  }

  getEtatChangement(): Observable<Etat[]> {
    return this.httpClient.get<Etat[]>(this.baseURLchangement);
  }

  getEtatId(id: number): Observable<Etat> {
    return this.httpClient.get<Etat>(`${this.baseURL}/${id}`);
  }
}
