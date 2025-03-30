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



  
/*



import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

formLogin: FormGroup;

    constructor(
      private _loginService: LoginService,
      private _router: Router
    ){
      this.formLogin= new FormGroup ({
        email : new FormControl(),
        password: new FormControl()
      })
    }
    
  ngOnInit(): void {
    
  }

  onSubmit() {
    const credentials = this.formLogin.value;
    
    this._loginService.login(credentials).subscribe({
      next: (response) => {
        console.log('✅ Respuesta del backend:', response); // Imprime la respuesta exitosa

        console.log('Login exitoso:', response);
        this._router.navigate(['/app-inicio']);
      },
      error: (error) => {
        console.error('Error en login:', error);

        console.log('🛑 Error status:', error.status);
        console.log('🛑 Error statusText:', error.statusText);
        console.log('🛑 Error message:', error.message);
        console.log('🛑 Respuesta completa del backend:', error.error); 
      }
    });
  }
}


 */
