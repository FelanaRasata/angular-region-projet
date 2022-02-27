import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Signalement } from '../interface/signalement';
import { MapService } from '../services/map.service';

import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegionService } from '../services/admin-region.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit,AfterViewInit{
  map:any;
  listeSignalParRegion:Signalement[];

  id!: number;

  constructor(private mapService: MapService,
    public router: Router,private adminRegionService: AdminRegionService) { this.listeSignalParRegion= []; }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.reloadData();


  }
  //iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',

  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]

  });

  smallIcon2 = new L.Icon({
    iconUrl: 'https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Image.png',
    iconRetinaUrl: 'https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Image.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]

  });

  smallIcon3 = new L.Icon({
    iconUrl: 'https://www.pinclipart.com/picdir/big/525-5258227_google-map-marker-icon-png-clipart.png',
    iconRetinaUrl: 'https://www.pinclipart.com/picdir/big/525-5258227_google-map-marker-icon-png-clipart.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]

  });

  smallIcon4 = new L.Icon({
    iconUrl: 'http://cdn.onlinewebfonts.com/svg/img_160597.png',
    iconRetinaUrl: 'http://cdn.onlinewebfonts.com/svg/img_160597.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]

  });

  smallIcon5 = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
    iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]

  });

  smallIcon6 = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
    iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]

  });

  // getDataNotif() {
  //   const token = localStorage.getItem('tokenUtilisateur');
  //   this.welcomeservice.getTsLesSignalementNotifParIdUtilisateur(token).subscribe(data => { this.lesSignalementNotif = data; });

  // }

  reloadData() {
    const token = localStorage.getItem('tokenRegion');
    this.mapService.getSignalementParIndexRegion(token!).subscribe(data => {
      this.listeSignalParRegion = data;
      this.createMap();

    });

  }

  createMap()
  {
      //config générale ilainle map irery iany fa tsy le classe na ny fonction hafa no ato
        const madaCoordPourLeZoom =
        {
          lat: -18.92496,
          lng: 46.441642,
        };
        /*6 mahia ny 22 regions*/
        const zoomLevel = 6;
        //zoom level: niveau de zoom le vo mipoitra
        //creation et affectation de la carte
                      //eto amle 'map' anaranle div asiana azy, ny ambony option daoly
        this.map = L.map('map', {
          center: [madaCoordPourLeZoom.lat, madaCoordPourLeZoom.lng],
          zoom: zoomLevel
        });

        // minZoom:  ,
        //   maxZoom: , pour limiter la capacité de zoom
        //mitelecharge anle layer(tsy maintsy misy)par le lien
        const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          minZoom: 1,
          maxZoom: 17,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        mainLayer.addTo(this.map);
        this.addMarker();


      }

      addMarker()
      {
        for(let i=0; i<this.listeSignalParRegion.length; i++)
        {
          if(this.listeSignalParRegion[i].etat[this.listeSignalParRegion[i].etat.length-1].index!=-1)
          {
                  if(this.listeSignalParRegion[i].categorie[0].index==1)
                  {
                    const marker = L.marker(
                            [this.listeSignalParRegion[i].coordonnee.latitude,
                            this.listeSignalParRegion[i].coordonnee.longitude],
                            { icon: this.smallIcon3,
                              draggable: true }
                      );
                  marker.addTo(this.map).bindPopup(
                    "<h3>"+this.listeSignalParRegion[i].description+"</h3><h4>Catégorie:"+this.listeSignalParRegion[i].categorie[0].nom+"</h4><h5>Etat:"+this.listeSignalParRegion[i].etat[this.listeSignalParRegion[i].etat.length-1].nom+"</h5>"
                  );
                  }
                  else if(this.listeSignalParRegion[i].categorie[0].index==2)
                  {
                    const marker = L.marker(
                      [this.listeSignalParRegion[i].coordonnee.latitude, this.listeSignalParRegion[i].coordonnee.longitude],
                      { icon: this.smallIcon4,
                        draggable: true });
                  marker.addTo(this.map).bindPopup(
                    "<h3>"+this.listeSignalParRegion[i].description+"</h3><h4>Catégorie:"+this.listeSignalParRegion[i].categorie[0].nom+"</h4><h5>Etat:"+this.listeSignalParRegion[i].etat[this.listeSignalParRegion[i].etat.length-1].nom+"</h5>"
                  );
                  }
                  else if(this.listeSignalParRegion[i].categorie[0].index==3)
                  {
                    const marker = L.marker([this.listeSignalParRegion[i].coordonnee.latitude, this.listeSignalParRegion[i].coordonnee.longitude], { icon: this.smallIcon,
                      draggable: true });
                  marker.addTo(this.map).bindPopup(
                    "<h3>"+this.listeSignalParRegion[i].description+"</h3><h4>Catégorie:"+this.listeSignalParRegion[i].categorie[0].nom+"</h4><h5>Etat:"+this.listeSignalParRegion[i].etat[this.listeSignalParRegion[i].etat.length-1].nom+"</h5>"
                  );
                  }
                  else if(this.listeSignalParRegion[i].categorie[0].index==4)
                  {
                    const marker = L.marker([this.listeSignalParRegion[i].coordonnee.latitude, this.listeSignalParRegion[i].coordonnee.longitude], { icon: this.smallIcon2,
                      draggable: true });
                  marker.addTo(this.map).bindPopup(
                    "<h3>"+this.listeSignalParRegion[i].description+"</h3><h4>Catégorie:"+this.listeSignalParRegion[i].categorie[0].nom+"</h4><h5>Etat:"+this.listeSignalParRegion[i].etat[this.listeSignalParRegion[i].etat.length-1].nom+"</h5>"
                    );
                  }
                  else if(this.listeSignalParRegion[i].categorie[0].index==5)
                  {
                    const marker = L.marker([this.listeSignalParRegion[i].coordonnee.latitude, this.listeSignalParRegion[i].coordonnee.longitude], { icon: this.smallIcon5,
                      draggable: true });
                    marker.addTo(this.map).bindPopup(
                    "<h3>"+this.listeSignalParRegion[i].description+"</h3><h4>Catégorie:"+this.listeSignalParRegion[i].categorie[0].nom+"</h4><h5>Etat:"+this.listeSignalParRegion[i].etat[this.listeSignalParRegion[i].etat.length-1].nom+"</h5>"
                    );
                  }
                  else if(this.listeSignalParRegion[i].categorie[0].index==6)
                  {
                    const marker = L.marker([this.listeSignalParRegion[i].coordonnee.latitude, this.listeSignalParRegion[i].coordonnee.longitude], { icon: this.smallIcon6,
                      draggable: true });
                  marker.addTo(this.map).bindPopup(
                    "<h3>"+this.listeSignalParRegion[i].description+"</h3><h4>Catégorie:"+this.listeSignalParRegion[i].categorie[0].nom+"</h4><h5>Etat:"+this.listeSignalParRegion[i].etat[this.listeSignalParRegion[i].etat.length-1].nom+"</h5>"
                    );
                  }
          }
          else
          {
            continue;
          }
        }
      }

      public click() {

        this.router.navigate(["liste-signalement",this.id]);
      }

    public liste() {
        this.router.navigate(["liste-signalement",this.id]);

      }

    public stat() {
      this.router.navigate(["statistique",this.id]);
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
