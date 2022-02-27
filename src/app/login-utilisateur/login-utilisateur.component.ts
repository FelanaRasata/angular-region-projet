import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRegionService } from '../services/admin-region.service';

@Component({
  selector: 'app-login-utilisateur',
  templateUrl: './login-utilisateur.component.html',
  styleUrls: ['./login-utilisateur.component.css']
})
export class LoginUtilisateurComponent implements OnInit {
  login: any;
  mdp: any;
  isError= false;
  idRegion : any;
  constructor(private adminRegionService: AdminRegionService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.adminRegionService.login(this.login,this.mdp).subscribe(data => {
      if (data.token =='' || data.token == null) {
        this.isError = true;
      } else {
        localStorage.setItem('tokenRegion',data.token);
        this.adminRegionService.idRegion(this.login,this.mdp).subscribe(data => this.idRegion=data);
        this.router.navigate(['liste-signalement',this.idRegion]);
      }
    } );

  }

}
