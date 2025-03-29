  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup } from '@angular/forms';
  import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
  })
  export class RegisterComponent implements OnInit{
    formReg: FormGroup;

    constructor(
      private _userService: UserService,
      private _router: Router
    ){
      this.formReg= new FormGroup ({
        email : new FormControl(),
        password: new FormControl()
      })
    }
    
  ngOnInit(): void {
    
  }

  onSubmit(){
  this._userService.register(this.formReg.value)
  .then(Response => {
    console.log(Response)
    this._router.navigate((['/app-login']))
  })
  .catch(error => console.log(error ))
  }

  onClick(){
    this._userService.loginWithGoogle()
    .then (Response => {
      this._router.navigate(['/app-inicio'])
    })
    .catch (error => console.log(error))
  }

  onClickFacebook(){
    this._userService.loginWithFacebook()
    .then (Response => {
      this._router.navigate(['/app-inicio'])
    })
    .catch (error => console.log(error))
  }


  }
