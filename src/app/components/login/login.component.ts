import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../classes/utilisateur";
import {UtilisateurService} from "../../services/utilisateur.service";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userobj:Utilisateur=new Utilisateur();

  constructor(public utilservice :UtilisateurService) { }
  public callingFunction():void {

  }
  public callingFunction2():void {

  }
  getUtilById(){
    this.utilservice.getUtilisateurById(this.userobj.id).subscribe((data)=>this.userobj =data)
  }
  userFormGroup= new FormGroup({
    user_firstname: new FormControl(),
    user_secondname: new FormControl(),
    user_adresse: new FormControl(),
    user_email: new FormControl(),
    user_zipcode: new FormControl(),
    user_birth: new FormControl()
  });
  checkFormGroup= new FormGroup({
    check_email: new FormControl(),
    check_id: new FormControl()
  });

  public checkUser(): void {
    this.getUtilById();
    if(this.userobj.email==this.checkFormGroup?.value.check_email && this.userobj.id==this.checkFormGroup?.value.check_id){
      console.log("email ok");
    }
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
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        });
    this.userFormGroup.reset();
  }



  ngOnInit(): void {
  }



}
