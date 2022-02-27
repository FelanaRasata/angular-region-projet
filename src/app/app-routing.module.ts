import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangementStatutComponent } from './changement-statut/changement-statut.component';
import { FicheRegionComponent } from './fiche-region/fiche-region.component';
import { LoginUtilisateurComponent } from './login-utilisateur/login-utilisateur.component';
import { MapComponent } from './map/map.component';
import { RechercheSignalementComponent } from './recherche-signalement/recherche-signalement.component';
import { SignalementRegionComponent } from './signalement-region/signalement-region.component';
import { SignalementStatutComponent } from './signalement-statut/signalement-statut.component';
import { StatParRegionComponent } from './stat-par-region/stat-par-region.component';

const routes: Routes = [
{path: "liste-signalement/:idRegion", component: SignalementRegionComponent},
{path: "", redirectTo: 'login-region', pathMatch: 'full'},
{path: "fiche-signalement/:id/:idRegion", component: FicheRegionComponent},
{path: "changement-statut/:id/:idRegion", component: ChangementStatutComponent},
{path: "recherche-signalement/:idRegion", component: RechercheSignalementComponent},
{path: "login-region", component: LoginUtilisateurComponent},
{path:'statistique/:idRegion',component: StatParRegionComponent},
{path:'signalement-region-statut/:idRegion/:idStatut',component: SignalementStatutComponent},
{path:'map-region',component: MapComponent},
{path:'map-region',component: MapComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
















