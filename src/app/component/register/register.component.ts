import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;
  errorMessage: string = ''; // Variable para errores del backend

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _loginService: LoginService
  ) {
    this.formReg = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.formReg.invalid) {
      console.log('🛑 Formulario inválido');
      this.errorMessage = 'Por favor, completa todos los campos correctamente.';
      return;
    }

        const userData = {
         ...this.formReg.value,
           firebaseUUID: crypto.randomUUID(),
          latitude: 40.7128,
          longitude: -74.0060

        };

        console.log('📡 Enviando datos al backend:', userData);

        this._loginService.register(userData).subscribe({
          next: (response) => {
            console.log('✅ Usuario registrado:', response);
            this._router.navigate(['/app-login']);

          },
          error: (error) => {
            console.error('🛑 Error en registro:', error);
            this.errorMessage = error.error?.message || 'Error desconocido. Intenta de nuevo.';
          },
        });


  }

  onClick() {
    this._loginService
      .loginWithGoogle()
      .then((response) => {
        console.log('✅ Usuario autenticado con Google:', response);
        this._router.navigate(['/app-inicio']);
      })
      .catch((error) => {
        console.log('🛑 Error con Google:', error);
        this.errorMessage = 'Error en autenticación con Google.';
      });
    
  }

  onClickFacebook() {
    this._loginService
      .loginWithFacebook()
      .then((response) => {
        console.log('✅ Usuario autenticado con Facebook:', response);
        this._router.navigate(['/app-inicio']);
      })
      .catch((error) => {
        console.log('🛑 Error con Facebook:', error);
        this.errorMessage = 'Error en autenticación con Facebook.';
      });
  }
}
