import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {LaboService} from "../../services/labo.service";

@Component({
  selector: 'app-labo',
  templateUrl: './labo.component.html',
  styleUrls: ['./labo.component.css']
})
export class laboComponent implements OnInit {

  constructor(private labo :LaboService) { }

  ngOnInit(): void {
  }




}
