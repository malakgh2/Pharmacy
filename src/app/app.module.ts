import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {laboComponent} from "./components/labo/labo.component";
import {AppRoutingModule} from "./app-routing.module";
import {LaboService} from "./services/labo.service";
import {UtilisateurService} from "./services/utilisateur.service";
import {FamilleService} from "./services/famille.service";
import {FactureService} from "./services/facture.service";
import {HttpClientModule} from "@angular/common/http";
import { BillComponent } from './components/bill/bill.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FournisseurComponent,
    CategorieComponent,
    UserComponent,
    DashboardComponent,
    laboComponent,
    BillComponent,

  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
      LaboService,
      UtilisateurService,
      FamilleService,
      FactureService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
