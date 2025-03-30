  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup } from '@angular/forms';
  import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
  })
  export class RegisterComponent implements OnInit{
    formReg: FormGroup;

    constructor(
      private _userService: UserService,
      private _router: Router,
      private _loginService: LoginService
    ){
      this.formReg= new FormGroup ({
        email : new FormControl(),
        password: new FormControl()
      })
    }
    
  ngOnInit(): void {
    
  }
  onSubmit() {
    if (this.formReg.valid) {
      // Obtener la ubicación del usuario
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userData = {
            ...this.formReg.value, // Extrae email y password del formulario
            firebaseUUID: crypto.randomUUID(), // Genera un UUID único
            latitude: position.coords.latitude,  // Usa la ubicación real del usuario
            longitude: position.coords.longitude
          };
  
          console.log('Datos a enviar al backend:', userData); // ✅ Verifica que los datos sean correctos
  
          this._loginService.register(userData).subscribe({
            next: (response) => {
              console.log('Usuario registrado con éxito:', response);
              this._router.navigate(['/app-login']);
            },
            error: (error) => {
              console.error('Error al registrar usuario:', error);
            }
          });
        },
        (error) => {
          console.error('Error obteniendo la ubicación:', error);
          alert('No se pudo obtener la ubicación. Verifica los permisos.');
        }
      );
    } else {
      console.log("Formulario inválido, por favor completa todos los campos.");
    }
  }
  
  
  


  onClick() {
    this._loginService.loginWithGoogle()
      .then(response => {
        console.log('Usuario autenticado con Google:', response);
        this._router.navigate(['/app-inicio']);
      })
      .catch(error => console.log(error));
  }

  onClickFacebook() {
    this._loginService.loginWithFacebook()
      .then(response => {
        console.log('Usuario autenticado con Facebook:', response);
        this._router.navigate(['/app-inicio']);
      })
      .catch(error => console.log(error));
  }
}
  



  
