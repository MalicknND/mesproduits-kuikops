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
  err: number = 0;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  // onLoggedin(): void {
  //   this.authService.login(this.user).subscribe(
  //     (data) => {
  //       let jwt = data.headers.get('Authorization')!;
  //       this.authService.saveToken(jwt);
  //       this.router.navigate(['/']);
  //     },
  //     (erreur) => {
  //       this.err = 1;
  //     },
  //   );
  // }

  // La version avec la méthode subscribe modifiée
  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data) => {
        let jwToken = data.headers.get('Authorization')!;
        this.authService.saveToken(jwToken);
        this.router.navigate(['/']);
      },
      error: (err: any) => {
        this.err = 1;
      },
    });
  }
}
