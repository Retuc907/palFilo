import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, UserCredential } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //private apiUrl = `${environment.BASE_URL}`; 

  private apiUrl = '/login'; 
  //this.apiUrl

  constructor(private http: HttpClient,
    private _auth: Auth
  ) {}

  login(credentials: { email?: string; password?: string; firebaseUUID?: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials,
      {headers: { 'Content-Type': 'application/json' },  withCredentials: true}
    );    
    
  }
  
  async loginWithGoogle(): Promise<UserCredential> {
    try {
      const userCredential: UserCredential = await signInWithPopup(this._auth, new GoogleAuthProvider());
      console.log('Inicio de sesión con Google exitoso:', userCredential);
      return userCredential;
    } catch (error) {
      console.error('Error en login con Google:', error);
      throw error;
    }
  }

  async loginWithFacebook(): Promise<UserCredential> {
    try {
      const userCredential: UserCredential = await signInWithPopup(this._auth, new FacebookAuthProvider());
      console.log('Inicio de sesión con Facebook exitoso:', userCredential);
      return userCredential;
    } catch (error) {
      console.error('Error en login con Facebook:', error);
      throw error;
    }
  }








  register(userData: { email: string; password: string; firebaseUUID: string; latitude: number; longitude: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, userData, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
  }
  
  

  
}