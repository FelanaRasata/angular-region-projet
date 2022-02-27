import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etat } from '../interface/etat';
import { Signalement } from '../interface/signalement';
import { EtatSignalement } from '../interface/signalement/etat-signalement';
import { EtatService } from '../services/etat.service';
import { SignalementService } from '../services/signalement.service';
import Swal from 'sweetalert2'
import { AdminRegionService } from '../services/admin-region.service';



@Component({
  selector: 'app-changement-statut',
  templateUrl: './changement-statut.component.html',
  styleUrls: ['./changement-statut.component.css']
})
export class ChangementStatutComponent implements OnInit {
  etats!: Etat[];
  id!: string;
  idRegion!: number;
  etatt!: Etat;
  etat: EtatSignalement = new EtatSignalement();
  signalement!: Signalement;
  et!: Etat[];

  constructor(private signalementService: SignalementService,
    public router: Router, private etatService: EtatService,
    public route: ActivatedRoute, private adminRegionService: AdminRegionService) { }

  ngOnInit(): void {
    this.adminRegionService.authentifiacation(localStorage.getItem('tokenRegion')!);

    this.id = this.route.snapshot.params['id'];
    this.idRegion = this.route.snapshot.params['idRegion'];

    this.etatService.getEtat().subscribe(data => {
      this.et = data;
    });
    this.getListeEtat();
  }

  public getListeEtat() {
    this.etatService.getEtatChangement().subscribe(data => {
      this.etats = data;
    });
  }

  public listeSignalement(id: number) {
    this.router.navigate(["liste-signalement", id]);
  }

  public setEtat(etats: Etat) {

    this.etatt = etats;
    this.etat.index = this.etatt.id;
    this.etat.nom = this.etatt.nom;
  }

  onSubmit() {
    this.signalementService.updateStatutSignalement(this.id, this.etat).subscribe(data => {
      this.signalement = data;
    });

    this.listeSignalement(this.idRegion);
  }

  public click() {
    this.router.navigate(["recherche-signalement", this.idRegion]);
  }

  public liste() {
    this.router.navigate(["liste-signalement", this.idRegion]);
  }

  public stat() {
    this.router.navigate(["statistique", this.idRegion]);
  }

  public signStatut(idStatut: number) {
    this.router.navigate(["signalement-region-statut", this.idRegion, idStatut]);
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
