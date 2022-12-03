import {Component, OnInit} from '@angular/core';
import {Laboratoire} from "../../classes/laboratoire";
import {Famille} from "../../classes/famille";
import {FamilleService} from "../../services/famille.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  public famille: Famille[] = [];
  errorMessage!: string;
  fami: Famille = new Famille();


  constructor(private fs:FamilleService) { }

  ngOnInit(): void {
    processing: true

  }

    public callingFunction(): void {}

  public familleFormGroup= new FormGroup({
    id_famille: new FormControl(),
    lib_famille: new FormControl()
  });

  public getFamille(): void {
    this.fs.getAll().subscribe((response: Famille[]) => {
      this.famille = response;
    }, (error: Famille[]) => {
      this.famille = error;
    });
    this.familleFormGroup.reset();
  }

  public deleteFamille(): void {
    this.fs.delete(this.familleFormGroup?.value.id_famille).subscribe(data => {
      console.log(data);
      this.getFamille();
    }, (error: void) => {
      console.log(error);
    });
    this.familleFormGroup.reset();
  }

    public updateFamille(): void {
    this.fami.id = this.familleFormGroup?.value.id_famille;
    this.fami.lib_famille = this.familleFormGroup?.value.lib_famille;
    this.fs.update(this.familleFormGroup?.value.id_famille, this.fami).subscribe(data => {
      console.log(data);
      this.getFamille();
    }, (error: void) => {
      console.log(error);
    });
    this.familleFormGroup.reset();
  }


  public saveFamille(): void {
    this.fami.id = this.familleFormGroup?.value.id_famille;
    this.fami.lib_famille = this.familleFormGroup?.value.lib_famille;
    this.fs.save(this.fami).subscribe(data => {
      console.log(data);
      this.getFamille();
    }, (error: void) => {
      console.log(error);
    });
    this.familleFormGroup.reset();
  }














}
