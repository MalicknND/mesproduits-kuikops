import { Component, type OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onLoggedin(): void {
    console.log(this.user);
    let isValidUser: boolean = this.authService.signIn(this.user);
    if (isValidUser) {
      this.router.navigate(['/']);
    } else {
      this.erreur = true;
    }
  }
}
