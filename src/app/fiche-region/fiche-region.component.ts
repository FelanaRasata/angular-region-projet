import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etat } from '../interface/etat';
import { Signalement } from '../interface/signalement';
import { EtatService } from '../services/etat.service';
import { SignalementService } from '../services/signalement.service';
import { AdminRegionService } from '../services/admin-region.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-fiche-region',
  templateUrl: './fiche-region.component.html',
  styleUrls: ['./fiche-region.component.css']
})
export class FicheRegionComponent implements OnInit {

  id!: string;
  idRegion!: number;

  signalement!: Signalement;
  etat!: Etat[];

  constructor(private signalementService: SignalementService,
    public router: Router, private route: ActivatedRoute,private etatService: EtatService,private adminRegionService: AdminRegionService) { }

  ngOnInit(): void {
    this.adminRegionService.authentifiacation(localStorage.getItem('tokenRegion')!);
    this.id = this.route.snapshot.params['id'];
    this.idRegion = this.route.snapshot.params['idRegion'];

    this.etatService.getEtat().subscribe(data => {
      this.etat = data;
    });

    this.getSignalementFiche(this.id);
  }

  public getSignalementFiche(id: string) {
    this.signalementService.getSignalementId(id).subscribe(data => {
      this.signalement = data;
  });
  }

  public retour() {
    this.router.navigate(["liste-signalement",this.idRegion]);
  }

  public liste() {
    this.router.navigate(["liste-signalement",this.idRegion]);
  }

  public click() {
    this.router.navigate(["recherche-signalement",this.idRegion]);
  }

  public etats(id: string) {
    this.router.navigate(["changement-statut", id,this.idRegion]);
  }

  public stat() {
    this.router.navigate(["statistique",this.idRegion]);
  }
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


      }
    })
  }

}
