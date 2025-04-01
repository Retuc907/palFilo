// LOGIN CON FIREBASE SERVICE --------------------------------------------------------------------------------------

/*
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
    this._router.navigate((['/app-mapa']))
  })
  .catch(error => console.log(error));
   }}

*/

  











   // LOGIN CON LA API ---------------------------------------------------------------------------------------------


import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      })
    }
    
  ngOnInit(): void {
    
  }

  onSubmit() {
    const credentials = this.formLogin.value;
  
    console.log('Estado del formulario:', this.formLogin);
    console.log('Datos del formulario:', credentials);
  
    if (this.formLogin.invalid) {
      console.log('🛑 Formulario inválido');
      Object.keys(this.formLogin.controls).forEach(control => {
        const controlErrors = this.formLogin.get(control)?.errors;
        if (controlErrors) {
          console.log(`${control} tiene los siguientes errores:`, controlErrors);
        }
      });
      return;
    }
  
    const firebaseUUID = ''; // Aquí si tienes el firebaseUUID lo agregas
    const userdata = {
      email: credentials.email,
      password: credentials.password,
      firebaseUUID: firebaseUUID || ''
    };
  
    console.log('Datos enviados al servidor:', userdata);
  
    this._loginService.login(userdata).subscribe({
      next: (response) => {
        console.log('✅ Respuesta del backend:', response);
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

