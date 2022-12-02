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



  ngOnInit(): void {


  }





}
