import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Signalement } from '../interface/signalement';
import { EtatSignalement } from '../interface/signalement/etat-signalement';
import { Statistique } from '../interface/statistique';

@Injectable({
  providedIn: 'root'
})
export class SignalementService {

  private baseURL = "https://spring-projet.herokuapp.com/api/signalement/region";
  private baseFicheURL = "https://spring-projet.herokuapp.com/api/signalement/fiche";
  private baseStatutURL = "https://spring-projet.herokuapp.com/api/signalement/statut";
  private baseSearchURL = "https://spring-projet.herokuapp.com/api/signalement/recherche";



  constructor(private httpClient: HttpClient) { }

  getSignalementRegion(id: number): Observable<Signalement[]> {
    return this.httpClient.get<Signalement[]>(`${this.baseURL}/${id}`);
  }

  getSignalementId(id: string): Observable<Signalement> {
    return this.httpClient.get<Signalement>(`${this.baseFicheURL}/${id}`);
  }

  updateStatutSignalement(id: string, etat: EtatSignalement): Observable<Signalement> {
    const headers={
      'Content-Type' : 'application/json'
    };

    return this.httpClient.put<Signalement>(`${this.baseStatutURL}/${id}`,etat);
  }

  searchSignalement(id: number, etat: string, categorie: string, dateStart: string, dateEnd: string):Observable<Signalement[]> {

    const headers={
      'Content-Type' : 'application/json'
    };

    var search = {
        "etat":etat,
        "categorie":categorie,
        "dateStart":dateStart,
        "dateEnd":dateEnd
    };



    return this.httpClient.post<Signalement[]>(`${this.baseSearchURL}/${id}`,search);
  }

  signalementStatutRegion(idRegion: number, idStatut: number) {
    const url = "https://spring-projet.herokuapp.com/api/signalement/statut/".concat(idRegion.toString()).concat("/").concat(idStatut.toString());

    return this.httpClient.get<Signalement[]>(url);
  }
}
