import {Component, OnInit} from '@angular/core';
import {laboComponent} from "./components/labo/labo.component";
import {Laboratoire} from "./classes/laboratoire";
import {LaboService} from "./services/labo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projetfront';

  public labos: Laboratoire[] = [];

    constructor(private laboService: LaboService) { }

  public getLabos(): void {
    this.laboService.getAll().subscribe((response: Laboratoire[]) => {
      this.labos = response;
    }, (error: Laboratoire[]) => {
      this.labos = error;
    });
  }

    ngOnInit(): void {
    this.getLabos();
  }



}
