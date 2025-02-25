import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,signOut, signInWithPopup,GoogleAuthProvider,FacebookAuthProvider } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private _auth:Auth) { }

  register({email,password}:any) {
    return createUserWithEmailAndPassword(this._auth,email,password);
  }

  login({email,password}:any){
    return signInWithEmailAndPassword(this._auth,email,password)
  }

  loginWithGoogle(){
    return signInWithPopup(this._auth,new GoogleAuthProvider());
  }

  loginWithFacebook(){
    return signInWithPopup(this._auth,new FacebookAuthProvider());
  }

  logout(){
    return signOut(this._auth);
  }
}
