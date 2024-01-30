import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
// import { AngularFireAuth } from "@angular/fire/auth";
// import firebase from 'firebase/app'
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  url = "";
  constructor(private http: HttpClient, public router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("User"))
    );

    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  signupUser(username: string, password: string) {
    //your code for signing up the new user
  }

  signinUser(username: string, password: string) {
    return this.http
      .post<any>(`${this.url}/DrSoft/login`, { username, password })
      .pipe(
        map((user) => {
          // console.log(user);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          if (!user.error) {
            localStorage.setItem("User", JSON.stringify(user.usuario));
            this.currentUserSubject.next(user.usuario);
          }
          return user;
        })
      );

  }

  logout() {
    localStorage.removeItem("User");
    this.currentUserSubject.next(null);
    this.router.navigate(["./pages/index"]);
  }

  isAuthenticated() {
    if (localStorage.getItem('User')) {
      return true;
    } else {
      return false;
    }
  }
}
