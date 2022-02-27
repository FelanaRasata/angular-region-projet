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

  private baseURL = "http://localhost:8080/api/signalement/region";
  private baseFicheURL = "http://localhost:8080/api/signalement/fiche";
  private baseStatutURL = "http://localhost:8080/api/signalement/statut";
  private baseSearchURL = "http://localhost:8080/api/signalement/recherche";



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

    // console.log(`${this.baseSearchURL}/${id}`);
    // console.log(search);


    return this.httpClient.post<Signalement[]>(`${this.baseSearchURL}/${id}`,search);
  }

  signalementStatutRegion(idRegion: number, idStatut: number) {
    const url = "http://localhost:8080/api/signalement/statut/".concat(idRegion.toString()).concat("/").concat(idStatut.toString());
    console.log(url);

    return this.httpClient.get<Signalement[]>(url);
  }
}
