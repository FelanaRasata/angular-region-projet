import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangementStatutComponent } from './changement-statut/changement-statut.component';
import { FicheRegionComponent } from './fiche-region/fiche-region.component';
import { LoginUtilisateurComponent } from './login-utilisateur/login-utilisateur.component';
import { RechercheSignalementComponent } from './recherche-signalement/recherche-signalement.component';
import { SignalementRegionComponent } from './signalement-region/signalement-region.component';

const routes: Routes = [
{path: "liste-signalement/:idRegion", component: SignalementRegionComponent},
{path: "", redirectTo: 'login-region', pathMatch: 'full'},
{path: "fiche-signalement/:id", component: FicheRegionComponent},
{path: "changement-statut/:id/:idRegion", component: ChangementStatutComponent},
{path: "recherche-signalement/:idRegion", component: RechercheSignalementComponent},
{path: "login-region", component: LoginUtilisateurComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
