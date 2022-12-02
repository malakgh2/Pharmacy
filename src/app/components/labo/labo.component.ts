import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {LaboService} from "../../services/labo.service";
import {Laboratoire} from "../../classes/laboratoire";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-labo',
  templateUrl: './labo.component.html',
  styleUrls: ['./labo.component.css']
})
export class laboComponent implements OnInit {

  public labos: Laboratoire[] = [];
  errorMessage!: string;
  laboobj: Laboratoire = new Laboratoire();



  constructor(private laboService: LaboService) {

  }

  public callingFunction(): void {
  }
  laboFormGroup= new FormGroup({
    labo_id: new FormControl(),
    labo_name: new FormControl()

  });

  public getLabos(): void {
    this.laboService.getAll().subscribe((response: Laboratoire[]) => {
      this.labos = response;
    }, (error: Laboratoire[]) => {
      this.labos = error;
    });
  }
  public handleDeleteLabo(): void {

    this.laboService.delete(this.laboFormGroup?.value.labo_id).subscribe(data => {
      console.log(data);
      this.getLabos();
    }, (error: void) => {
      console.log(error);
    });
  }


  public updateLabo(): void {
    this.laboobj.id = this.laboFormGroup?.value.labo_id;
    this.laboobj.lib_lab = this.laboFormGroup?.value.labo_name;
    this.laboService.update(this.laboFormGroup?.value.labo_id, this.laboobj).subscribe(data => {
      console.log(data);
      this.getLabos();
    }, (error: void) => {
      console.log(error);
    });

  }

  public saveLabo(): void {
    this.laboobj.id = this.laboFormGroup?.value.labo_id;
    this.laboobj.lib_lab = this.laboFormGroup?.value.labo_name;
    this.laboService.save(this.laboobj).subscribe(data => {
      console.log(data);
      this.getLabos();
    }, (error: void) => {
      console.log(error);
    });
  }



  ngOnInit(): void {
    processing: true


  }




}
