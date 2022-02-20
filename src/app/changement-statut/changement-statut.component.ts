import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etat } from '../interface/etat';
import { Signalement } from '../interface/signalement';
import { EtatSignalement } from '../interface/signalement/etat-signalement';
import { EtatService } from '../services/etat.service';
import { SignalementService } from '../services/signalement.service';



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

  constructor(private signalementService: SignalementService,
    public router: Router, private etatService: EtatService,
    public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.idRegion = this.route.snapshot.params['idRegion'];

    this.getListeEtat();
  }

  public getListeEtat() {
    this.etatService.getEtat().subscribe(data => {
        this.etats = data;
    });
  }

  public listeSignalement(id: number) {
    this.router.navigate(["liste-signalement",id]);
  }

  public setEtat(etats: Etat) {
    // console.log(etat);

    this.etatt = etats;
    this.etat.index = this.etatt.id;
    this.etat.nom = this.etatt.nom;
  }

  onSubmit() {
    console.log(this.etat);
    this.signalementService.updateStatutSignalement(this.id, this.etat).subscribe(data => {
      this.signalement = data;
    });

    console.log(this.signalement);
    this.listeSignalement(this.idRegion);
  }

  public click() {
    this.router.navigate(["recherche-signalement",this.idRegion]);
  }

  public liste() {
    this.router.navigate(["liste-signalement",this.idRegion]);
  }

}
