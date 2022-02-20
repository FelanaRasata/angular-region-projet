import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../interface/tools';

@Injectable({
  providedIn: 'root'
})
export class AdminRegionService {

  constructor(private httpClient: HttpClient) { }

  login(login: string, mdp: string): Observable<Token> {
    const url = 'https://spring-projet.herokuapp.com/api/adminRegion/'.concat(login).concat("/").concat(mdp);
    console.log(url);

    return this.httpClient.get<Token>(url);
  }

  idRegion(login: string, mdp: string): Observable<number>{

    const url = 'https://spring-projet.herokuapp.com/api/adminRegion/idregion/'.concat(login).concat("/").concat(mdp);
    console.log(url);

    return this.httpClient.get<number>(url);

  }

}
