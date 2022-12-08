import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from "../../services/utilisateur.service";
import {LaboService} from "../../services/labo.service";
import {FamilleService} from "../../services/famille.service";
import {Observable} from "rxjs";
import {DashboardService} from "../../services/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nbu: Observable<number> = new Observable<number>();
  nbf: Observable<number> = new Observable<number>();
  nbl: Observable<number> = new Observable<number>();

  getCountFromServiceU(){
    this.us.countUtilisateur().subscribe((data)=>this.nbu =data)
  }

  getCountFromServiceF(){
    this.uf.countFamille().subscribe((data)=>this.nbf =data)
  }

  getCountFromServiceL(){
    this.ul.countLaboratoire().subscribe((data)=>this.nbl =data)
  }









  constructor(private us:UtilisateurService,private ul:LaboService,private uf:FamilleService,ds:DashboardService) { }

  ngOnInit(): void {
    this.getCountFromServiceU()
this.getCountFromServiceF()
this.getCountFromServiceL()

  }






}
