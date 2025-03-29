import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _auth: Auth) {}

  async register({ email, password }: any) {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(this._auth, email, password);
      console.log('Registro exitoso:', userCredential);
      return userCredential;
    } catch (error) {
      console.error('Error en registro:', error);
      throw error;
    }
  }

  async login({ email, password }: any) {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(this._auth, email, password);
      console.log('Inicio de sesión exitoso:', userCredential);
      return userCredential;
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  }

  async loginWithGoogle() {
    try {
      const userCredential: UserCredential = await signInWithPopup(this._auth, new GoogleAuthProvider());
      console.log('Inicio de sesión con Google exitoso:', userCredential);
      return userCredential;
    } catch (error) {
      console.error('Error en login con Google:', error);
      throw error;
    }
  }

  async loginWithFacebook() {
    try {
      const userCredential: UserCredential = await signInWithPopup(this._auth, new FacebookAuthProvider());
      console.log('Inicio de sesión con Facebook exitoso:', userCredential);
      return userCredential;
    } catch (error) {
      console.error('Error en login con Facebook:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(this._auth);
      console.log('Cierre de sesión exitoso');
    } catch (error) {
      console.error('Error en logout:', error);
      throw error;
    }
  }
}
