import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-ex3-routing',
  templateUrl: './ex3-routing.component.html',
  styleUrls: ['./ex3-routing.component.css'],
})
export class Ex3RoutingComponent {
  constructor(private auth: AuthService, private router: Router) {}

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
