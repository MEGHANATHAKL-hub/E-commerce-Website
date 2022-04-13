import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Demand ML';
  isLoggedIn: boolean = false;
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router) { }

  ngOnInit() {

  }
}
