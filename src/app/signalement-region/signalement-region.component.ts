import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Signalement } from '../interface/signalement';
import { SignalementService } from '../services/signalement.service';

@Component({
  selector: 'app-signalement-region',
  templateUrl: './signalement-region.component.html',
  styleUrls: ['./signalement-region.component.css']
})
export class SignalementRegionComponent implements OnInit {

  signalements!: Signalement[];
  idRegion!: number;

  constructor(private signalementService: SignalementService,
    public router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idRegion = this.route.snapshot.params['idRegion'];
    this.getRegionSignalement(this.idRegion);
  }

  public getRegionSignalement(id: number) {
    this.signalementService.getSignalementRegion(id).subscribe(data => {
        this.signalements = data;
    });

  }

  public getFicheSignalement(id: string) {
      this.router.navigate(["fiche-signalement", id]);
  }

  public click() {
    this.router.navigate(["recherche-signalement",this.idRegion]);
  }

}
