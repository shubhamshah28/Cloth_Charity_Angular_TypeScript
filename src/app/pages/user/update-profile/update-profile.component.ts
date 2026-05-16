import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css',
})

export class UpdateProfileComponent implements OnInit {

  data:any=[];
  cities:any=[];

  id:any=sessionStorage.getItem('id');

  constructor(
    private srv:ApiService,
    private router:Router
  ){}

  ngOnInit(){

    // user data
    this.srv.regsearch(this.id).subscribe((res:any)=>{
      this.data=res;
    });

    // city list
    this.srv.getCities().subscribe((res:any)=>{
      this.cities=res;
    });

  }

  updateProfile(frmdata:any){

    this.srv.userupdate(frmdata,this.id).subscribe(()=>{

      alert("Profile Updated Successfully");

      this.router.navigate(['/donor_profile']);

    });

  }

}