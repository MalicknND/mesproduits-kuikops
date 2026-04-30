import { Component, type OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent implements OnInit {
  user = new User();

  constructor() {}

  ngOnInit(): void {}

  onLoggedin(): void {
    // Here you would typically call a service to authenticate the user
    console.log('Logging in with', this.user);
  }
}
