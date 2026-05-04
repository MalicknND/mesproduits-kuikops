import { Injectable, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  // users: User[] = [
  //   { username: 'admin', password: '123', roles: ['ADMIN'] },
  //   { username: 'malick', password: '123', roles: ['USER'] },
  // ];
  apiURL: string = 'http://localhost:8082/users';
  token!: string;

  public loggedUser!: string;
  public isloggedIn: boolean = false;
  public roles!: string[];

  private jwtHelper = new JwtHelperService();

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  login(user: User) {
    return this.http.post<User>(this.apiURL + '/login', user, {
      observe: 'response',
    });
  }
  saveToken(jwt: string) {
    localStorage.setItem('jwt', jwt);
    this.token = jwt;
    this.isloggedIn = true;
    this.decodeJWT();
  }
  getToken(): string {
    return this.token;
  }

  decodeJWT() {
    if (this.token == undefined) return;
    const decodedToken = this.jwtHelper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
    {
    }
  }

  loadToken() {
    this.token = localStorage.getItem('jwt')!;
    this.decodeJWT();
  }

  ngOnInit(): void {}

  logout() {
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token = undefined!;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    if (!this.roles) return false;
    return this.roles.indexOf('ADMIN') >= 0;
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    // this.getUserRoles(login);
  }

  isTokenExpired(): Boolean {
    return this.jwtHelper.isTokenExpired(this.token);
  }

  // getUserRoles(username: string) {
  //   this.users.forEach((curUser) => {
  //     if (curUser.username == username) {
  //       this.roles = curUser.roles;
  //     }
  //   });
  // }
}
