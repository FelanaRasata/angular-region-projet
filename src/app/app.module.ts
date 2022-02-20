import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FicheRegionComponent } from './fiche-region/fiche-region.component';
import { HttpClientModule } from '@angular/common/http';
import { SignalementRegionComponent } from './signalement-region/signalement-region.component';
import { ChangementStatutComponent } from './changement-statut/changement-statut.component';
import { FormsModule } from '@angular/forms';
import { RechercheSignalementComponent } from './recherche-signalement/recherche-signalement.component';
import { LoginUtilisateurComponent } from './login-utilisateur/login-utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    FicheRegionComponent,
    SignalementRegionComponent,
    ChangementStatutComponent,
    RechercheSignalementComponent,
    LoginUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
