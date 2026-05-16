import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  stats: any = {
    users: 0,
    total: 0,
    pending: 0,
    accepted: 0,
    rejected: 0,
    volunteers: 0
  };

  recent: any = [];

  constructor(private srv: ApiService) { }

  ngOnInit() {

    this.srv.getAdminStats().subscribe((res: any) => {
      this.stats = res;
    });

    this.srv.getDonations().subscribe((res: any) => {
      this.recent = res.slice(0, 5);
    });

  }
}
