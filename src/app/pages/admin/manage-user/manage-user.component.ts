import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.css',
})
export class ManageUserComponent {
  data: any;
  constructor(
    private srv: ApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    srv.getregdata().subscribe((dt) => {
      this.data = dt;
      console.log(dt);
    });
  }

  rowdelete(id: string) {
    this.srv.regdelete(id).subscribe((dt) => {
      console.log(dt);
    });

    this.srv.getregdata().subscribe((dt) => {
      this.data = dt;
      console.log(dt);
    });
  }

  rowsearch(id: string) {
    sessionStorage.setItem('id', id);
    this.srv.regsearch(id).subscribe((dt) => {
      console.log(dt);
    });
    this.router.navigate(['/update_users']);
  }
}
