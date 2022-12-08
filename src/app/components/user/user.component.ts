import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../classes/utilisateur";
import {UtilisateurService} from "../../services/utilisateur.service";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users:Utilisateur[]=[];



 userobj:Utilisateur=new Utilisateur();

  constructor(public utilservice :UtilisateurService) { }
  /*public callingFunction(addForm: NgForm):void {
        document.getElementById('btn-create')?.click();
        this.utilservice.save(addForm.value).subscribe((response:Utilisateur) => {
            console.log(response);
            this.listUser();
        },
            (error: HttpErrorResponse) => {
            console.log(error);
        });
  }*/
    public callingFunction():void {

    }
  userFormGroup= new FormGroup({
    user_id: new FormControl(),
    user_firstname: new FormControl(),
    user_secondname: new FormControl(),
    user_adresse: new FormControl(),
    user_email: new FormControl(),
    user_zipcode: new FormControl(),
    user_birth: new FormControl()
  });




    public listUser(): void {
      this.utilservice.getAll().subscribe((response: Utilisateur[]) => {
        this.users = response;
      }, (error: Utilisateur[]) => {
        this.users = error;
      });
      this.userFormGroup.reset();

    }
    public deleteUser(): void {

      this.utilservice.delete(this.userFormGroup?.value.user_id).subscribe(data => {
        console.log(data);
        this.listUser();
      }, (error: void) => {
        console.log(error);
      });
      this.userFormGroup.reset();

    }

    public updateUser(): void {

        this.userobj.nom = this.userFormGroup?.value.user_firstname;
        this.userobj.prenom = this.userFormGroup?.value.user_secondname;
        this.userobj.email = this.userFormGroup?.value.user_email;
        this.userobj.adresse= this.userFormGroup?.value.user_adresse;
        this.userobj.codePostale = this.userFormGroup?.value.user_zipcode;
        this.userobj.dateNaissance = this.userFormGroup?.value.user_birth;
      this.utilservice.update(this.userFormGroup?.value.user_id,this.userobj).subscribe(data => {
        console.log(data);
        this.listUser();
      }, (error: void) => {
        console.log(error);
      });
      this.userFormGroup.reset();

    }


    public saveUser(): void {
      this.userobj.nom= this.userFormGroup?.value.user_firstname;
      this.userobj.prenom = this.userFormGroup?.value.user_secondname;
      this.userobj.email = this.userFormGroup?.value.user_email;
      this.userobj.adresse= this.userFormGroup?.value.user_adresse;
      this.userobj.codePostale = this.userFormGroup?.value.user_zipcode;
      this.userobj.dateNaissance = this.userFormGroup?.value.user_birth;
      console.log(this.userobj);
        this.utilservice.save(this.userobj).subscribe((response:Utilisateur) => {
                console.log(response);
                this.listUser();
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            });
        this.userFormGroup.reset();
    }
  ngOnInit(): void {
    processing: true
  }





}


