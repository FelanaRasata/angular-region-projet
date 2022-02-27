import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etat } from '../interface/etat';
import { Signalement } from '../interface/signalement';
import { EtatService } from '../services/etat.service';
import { SignalementService } from '../services/signalement.service';
import { AdminRegionService } from '../services/admin-region.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signalement-region',
  templateUrl: './signalement-region.component.html',
  styleUrls: ['./signalement-region.component.css']
})
export class SignalementRegionComponent implements OnInit {

  signalements!: Signalement[];
  idRegion!: number;
  //
  etat!: Etat[];

  constructor(private signalementService: SignalementService,
    public router: Router,private route: ActivatedRoute,private etatService: EtatService,private adminRegionService: AdminRegionService) { }

  ngOnInit(): void {
    this.adminRegionService.authentifiacation(localStorage.getItem('tokenRegion')!);
    this.idRegion = this.route.snapshot.params['idRegion'];
    //
    this.etatService.getEtat().subscribe(data => {
      this.etat = data;
    });
    this.getRegionSignalement(this.idRegion);
  }

  public getRegionSignalement(id: number) {
    this.signalementService.getSignalementRegion(id).subscribe(data => {
        this.signalements = data;
    });

  }

  public getFicheSignalement(id: string) {
      this.router.navigate(["fiche-signalement", id,this.idRegion]);
  }

  public click() {
    this.router.navigate(["recherche-signalement",this.idRegion]);
  }

  public liste() {
    this.router.navigate(["liste-signalement",this.idRegion]);
  }

  public stat() {
    this.router.navigate(["statistique",this.idRegion]);
  }
//
  public signStatut(idStatut: number) {
    this.router.navigate(["signalement-region-statut",this.idRegion,idStatut]);
  }

  public carte() {
    this.router.navigate(["map-region"]);
  }

  logOut() {
    const token = localStorage.getItem('tokenRegion');
    this.adminRegionService.logOut(token!);
    localStorage.removeItem('tokenRegion');
    this.router.navigate(['']);
  }

  async confirm() {
    Swal.fire({
      title: 'Voulez-vous vraiment vous déconnecter?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Se deconnecter',
      cancelButtonText: 'Annuler',
    }).then((result) => {

      if (result.isConfirmed) {

       this.logOut();

      } else if (result.isDismissed) {

        console.log('Annuler');

      }
    })
  }

}
