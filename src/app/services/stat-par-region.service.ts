import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StatGenParRegion } from "../interface/statGenParRegion";
import { Statistique } from '../interface/statistique';
//import { Signalement } from '../interface/signalement';

@Injectable({
  providedIn: 'root'
})
export class StatParRegionService {

  constructor(private http:HttpClient)
  {}

  getStatParIndexRegion(token:string): Observable<StatGenParRegion[]> {
    const url = 'https://spring-projet.herokuapp.com/api/signalement/statistique/parregion/categorie';
    return this.http.get<StatGenParRegion[]>(url+ "/" + token);

  }

  statParIndexRegion(id:number): Observable<Statistique[]> {
    const url = 'https://spring-projet.herokuapp.com/api/signalement/statistique/region/categorie';
    return this.http.get<Statistique[]>(url+ "/" + id);

  }
}


