import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule, RouterModule,CommonModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
})

export class UpdateUserComponent implements OnInit {

  data: any = [];
  cities: any = [];
  id: any = sessionStorage.getItem('id');

  constructor(
    private srv: ApiService,
    private router: Router
  ) {}

  ngOnInit() {

    // USER DATA
    this.srv.regsearch(this.id).subscribe((dt: any) => {

      this.data = dt;

      if (this.data && this.data.length > 0) {
        this.data[0].state = "Gujarat";
      }

    });

    // CITY DATA
    this.srv.getCities().subscribe((res:any)=>{

console.log("Cities:",res);

this.cities=res;

});

  }

  regSubmit(frmdata: any) {

    frmdata.state = "Gujarat";

    this.srv.userupdate(frmdata, this.id).subscribe((result) => {

      console.log(result);

      this.router.navigate(['/manage_users']);

    });

  }

}