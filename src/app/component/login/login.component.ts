import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

formLogin: FormGroup;

    constructor(
      private _userService: UserService,
      private _router: Router
    ){
      this.formLogin= new FormGroup ({
        email : new FormControl(),
        password: new FormControl()
      })
    }
    
  ngOnInit(): void {
    
  }

  onSubmit(){
  this._userService.login(this.formLogin.value)
  .then(response => {
    console.log(response);
    this._router.navigate((['/app-inicio']))
  })
  .catch(error => console.log(error));
   }}