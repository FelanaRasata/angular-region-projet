import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { StatParRegionService } from '../services/stat-par-region.service';
import { StatGenParRegion } from "../interface/statGenParRegion";
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { point } from 'leaflet';
import { ActivatedRoute, Router } from '@angular/router';
import { Statistique } from '../interface/statistique';
import { Etat } from '../interface/etat';
import { EtatService } from '../services/etat.service';
import { AdminRegionService } from '../services/admin-region.service';
import Swal from 'sweetalert2'

HighchartsMore(Highcharts);

@Component({
  selector: 'app-stat-par-region',
  templateUrl: './stat-par-region.component.html',
  styleUrls: ['./stat-par-region.component.css']
})
export class StatParRegionComponent implements OnInit {
  title = 'Statistiques de cette région';
  listestatParRegion:StatGenParRegion[];

  statReg : Statistique[]=[];
  listeNomCateg:string[];
  nombreCateg:Number[];

  idReg!: number;

  etat!: Etat[];

  constructor(private statParRegionService: StatParRegionService,
    public router: Router, private route: ActivatedRoute,private etatService: EtatService,private adminRegionService: AdminRegionService) {
    this.listestatParRegion= [];
    this.listeNomCateg= [];
    this.nombreCateg= [];
  }

  ngOnInit() {
    this.adminRegionService.authentifiacation(localStorage.getItem('tokenRegion')!);
    this.idReg = this.route.snapshot.params['idRegion'];
    this.reloadData();
    this.etatService.getEtat().subscribe(data => {
      this.etat = data;
    });
  }

  // reloadData() {
  //   const token= localStorage.getItem("tokenRegion");

  //     this.statParRegionService.getStatParIndexRegion(token!).subscribe(data => {
  //       this.listestatParRegion = data;
  //       console.log("données reçues");
  //     });


  // }

  reloadData() {

    this.statParRegionService.statParIndexRegion(this.idReg).subscribe(data => {
      this.statReg=data;
    });

  }

  columnChartParRegion(): void {


    for(let i=0;i<this.statReg.length;i++) {
      this.listeNomCateg[i] = this.statReg[i].id;
      this.nombreCateg[i] = this.statReg[i].nombre;
    }



      const options: any = {
      Chart: {
        type: 'bar'
        // height: 700
      },
      title: {
        text: 'Les statistiques des signalements par régions'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: this.listeNomCateg,
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
      title: {
        text : 'Nombre de signalements'
      }
    },
    tooltip: {
      headerFormat: `<div>Categorie: {point.key}</div>`,
      pointFormat: `<div>Nombre: {point.y}</div>`,
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      bar: {
       dataLabels: {
         enabled: true
       }
      },
    },
      series: [{
        name: 'Categories',
        data: this.nombreCateg
    }]
    }

    Highcharts.chart('chart-column', options);


  }
  public click() {
    this.router.navigate(["recherche-signalement",this.idReg]);
  }

  public liste() {
    this.router.navigate(["liste-signalement",this.idReg]);
  }

  public stat() {
    this.router.navigate(["statistique",this.idReg]);
  }

  public signStatut(idStatut: number) {
    this.router.navigate(["signalement-region-statut",this.idReg,idStatut]);
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



// @Component({
//   selector: 'app-map-r',
//   templateUrl: './map-r.component.html',
//   styleUrls: ['./map-r.component.css']
// })
// export class MapRComponent implements OnInit,AfterViewInit
// {
//   listeSignalParRegion:Signalement[];
//   map:any;


//   //atao eto daoly ny liste an icone
//   // retrieve from https://gist.github.com/ThomasG77/61fa02b35abf4b971390
//   smallIcon = new L.Icon({
//     iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
//     iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
//     iconSize:    [25, 41],
//     iconAnchor:  [12, 41],
//     popupAnchor: [1, -34],
//     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//     shadowSize:  [41, 41]
//   });


//   constructor(private signalementservice: SignalementRService)
//   {this.listeSignalParRegion= []; }

//   ngOnInit(): void {
//     this.reloadData();

//   }

//   ngAfterViewInit(): void {

//   }

//   reloadData() {
//     this.signalementservice.getSignalementParIndexRegion(4).subscribe(data => {
//       this.listeSignalParRegion = data;
//       console.log("données reçues");

//       //atao eto ambany eto le fonction mila anle données no antsoina fa manjary mbola tsy azo le données
//       //na mbola ao amle ngafterview init aza dia mbola tsy hitany satria le izy le mandeha assynchrone dia hafahafa
//       this.createMap();

//     });

//   }


//   createMap()
//   {
//       //config générale ilainle map irery iany fa tsy le classe na ny fonction hafa no ato
//         const madaCoordPourLeZoom =
//         {
//           lat: -18.92496,
//           lng: 46.441642,
//         };
//         /*6 mahia ny 22 regions*/
//         const zoomLevel = 6;
//         //zoom level: niveau de zoom le vo mipoitra
//         //creation et affectation de la carte
//                       //eto amle 'map' anaranle div asiana azy, ny ambony option daoly
//         this.map = L.map('map', {
//           center: [madaCoordPourLeZoom.lat, madaCoordPourLeZoom.lng],
//           zoom: zoomLevel
//         });

//         // minZoom:  ,
//         //   maxZoom: , pour limiter la capacité de zoom
//         //mitelecharge anle layer(tsy maintsy misy)par le lien
//         const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//           minZoom: 1,
//           maxZoom: 17,
//           attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         });

//         const coordonnee =
//         {
//           // {{signalementCarteR.categorie[0].nom}}
//           // {{signalementCarteR.categorie[0].nom}}
//           lat: this.listeSignalParRegion[0].coordonnee.latitude,
//           lng: this.listeSignalParRegion[0].coordonnee.longitude,
//         };

//         mainLayer.addTo(this.map);
//         this.addMarker();
//       //
//       }


//       /*ajout*/
//       addMarker()
//       {
//         for(let i=0; i<this.listeSignalParRegion.length; i++)
//         {
//           //mbola amboarina eo le valuer dynamique mbola tsy mipoitra dia mbola atao différent par etat koa ny couleur an icone
//           const marker = L.marker([this.listeSignalParRegion[i].coordonnee.latitude, this.listeSignalParRegion[i].coordonnee.longitude], { icon: this.smallIcon });
//           marker.addTo(this.map).bindPopup(
//             "<h3>"+this.listeSignalParRegion[i].description+"</h3><h4>Catégorie:"+this.listeSignalParRegion[i].categorie[0].nom+"</h4><h5>Etat:"+this.listeSignalParRegion[i].description+"</h5>"
//           );
//         }
//       }

// }

