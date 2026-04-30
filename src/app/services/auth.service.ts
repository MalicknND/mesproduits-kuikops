import { Injectable, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'malick', password: '123', roles: ['USER'] },
  ];
  public loggedUser!: string;
  public isloggedIn: boolean = false;
  public roles!: string[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  signIn(user: User): boolean {
    let validUser: boolean = false;
    this.users.forEach((curUser) => {
      if (
        user.username === curUser.username &&
        user.password === curUser.password
      ) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });

    return validUser;
  }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    if (!this.roles) return false;
    return this.roles.indexOf('ADMIN') > -1;
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });
  }
}
