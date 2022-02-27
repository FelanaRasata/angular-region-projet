import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../interface/tools';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminRegionService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(login: string, mdp: string): Observable<Token> {
    const url = 'https://spring-projet.herokuapp.com/api/adminRegion/'.concat(login).concat("/").concat(mdp);



    return this.httpClient.get<Token>(url);
  }

  idRegion(login: string, mdp: string): Observable<number>{

    const url = 'https://spring-projet.herokuapp.com/api/adminRegion/idregion/'.concat(login).concat("/").concat(mdp);
    console.log(url);

    return this.httpClient.get<number>(url);

  }

  public logOut(token: string){
    const url = 'https://spring-projet.herokuapp.com/api/tokenUtilisateur/logout/'.concat(token);
    console.log(url);
    this.httpClient.delete(url).subscribe();
  }

  authentifiacation(token: string) {
    if (token == null || token === '')
      this.router.navigate(['']);
  }

}
