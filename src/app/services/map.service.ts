import { Injectable } from '@angular/core';
import { Signalement } from '../interface/signalement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  // getSignalementParIndexRegion(indexRegion:number): Observable<Signalement[]> {
  //   const url = 'https://spring-projet.herokuapp.com/api/signalement/listesignal/Listeoff';

  //   //return this.http.get<Signalement[]>(url+ "/" + indexRegion);
  //   return this.http.get<Signalement[]>(url+ "/" + indexRegion);


  // }

  // getSignalementParIndexRegion(indexRegion:number): Observable<Signalement[]> {
  //   const url = 'https://spring-projet.herokuapp.com/api/signalement/listesignal/Listeoff';

  //   //return this.http.get<Signalement[]>(url+ "/" + indexRegion);
  //   return this.http.get<Signalement[]>(url+ "/" + indexRegion);


  // }

  getSignalementParIndexRegion(token: string): Observable<Signalement[]> {
    const url = 'https://spring-projet.herokuapp.com/api/signalement/listesignal/Listeoff'+ '/' + token;


    return this.http.get<Signalement[]>(url);
  }
}
