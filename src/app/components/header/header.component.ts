import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  role: string = 'public';
  fullName: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.authService.role$.subscribe(r => this.role = r);
    this.authService.fullName$.subscribe(name => this.fullName = name);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);   // redirect to public home
  }
}