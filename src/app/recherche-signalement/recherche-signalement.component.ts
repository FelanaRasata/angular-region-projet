import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etat } from '../interface/etat';
import { Signalement } from '../interface/signalement';
import { EtatService } from '../services/etat.service';
import { SignalementService } from '../services/signalement.service';
import { AdminRegionService } from '../services/admin-region.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-recherche-signalement',
  templateUrl: './recherche-signalement.component.html',
  styleUrls: ['./recherche-signalement.component.css']
})

export class RechercheSignalementComponent implements OnInit {

  id!: number;
  idReg: any;
  etat!: string;
  categorie!: string;
  dateStart!: string;
  dateEnd!: string;

  signalements!: Signalement[];
  et!: Etat[];

  constructor(private signalementService: SignalementService,
    public router: Router, private route: ActivatedRoute,private etatService: EtatService,private adminRegionService: AdminRegionService) {}

  ngOnInit(): void {
    this.adminRegionService.authentifiacation(localStorage.getItem('tokenRegion')!);
    this.id = this.route.snapshot.params['idRegion'];

    this.etatService.getEtat().subscribe(data => {
      this.et = data;
    });
  }

  public getRechercheSignalement() {
    this.signalementService.searchSignalement(this.id,this.etat,this.categorie,this.dateStart,this.dateEnd).subscribe(
      data => { this.signalements = data; }
    );

  }

  onSubmit() {
    this.getRechercheSignalement();
  }

  public click() {

    this.router.navigate(["liste-signalement",this.id]);
  }

  public retour(idRegion : number) {
    this.router.navigate(["liste-signalement",idRegion]);
  }

  public etatt(id: string,idRegion : number) {
    this.router.navigate(["changement-statut", id,idRegion]);
  }
  public liste() {
    this.router.navigate(["liste-signalement",this.id]);

  }

  public getFicheSignalement(id: string) {
    this.router.navigate(["fiche-signalement", id,this.id]);
}

public stat() {
  this.router.navigate(["statistique",this.id]);
}

public signStatut(idStatut: number) {
  this.router.navigate(["signalement-region-statut",this.id,idStatut]);
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
