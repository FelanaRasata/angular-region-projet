import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Signalement } from '../interface/signalement';
import { SignalementService } from '../services/signalement.service';

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

  constructor(private signalementService: SignalementService,
    public router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idRegion'];
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


}
