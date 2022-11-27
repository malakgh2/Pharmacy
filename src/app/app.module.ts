import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FournisseurComponent,
    CategorieComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
