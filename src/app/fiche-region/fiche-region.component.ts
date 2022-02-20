import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Signalement } from '../interface/signalement';
import { SignalementService } from '../services/signalement.service';

@Component({
  selector: 'app-fiche-region',
  templateUrl: './fiche-region.component.html',
  styleUrls: ['./fiche-region.component.css']
})
export class FicheRegionComponent implements OnInit {

  id!: string;
  idRegion!: number;

  signalement!: Signalement;

  constructor(private signalementService: SignalementService,
    public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.idRegion = this.route.snapshot.params['idRegion'];

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

  public etat(id: string) {
    this.router.navigate(["changement-statut", id,this.idRegion]);
  }



}
