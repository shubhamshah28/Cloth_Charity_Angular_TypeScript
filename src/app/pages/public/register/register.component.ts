import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  data:any;
  cities:any = [];   // ✅ ADD THIS
  successMsg:string='';
  errorMsg:string='';
  state:string="Gujarat";

  constructor(private srv:ApiService){}

  ngOnInit(){

    // register data
    this.srv.getdata().subscribe((dt)=>{
      this.data = dt;
      console.log(dt);
    });

    // city dropdown
    this.srv.getCities().subscribe((res:any)=>{
      this.cities = res;
      console.log("Cities:",res);
    });

  }

  regSubmit(frmdata:any, regForm:NgForm){

    this.srv.regsubmit(frmdata).subscribe({

      next:(result:any)=>{

        if(result && result.acknowledged){

          this.successMsg="Registration successful!";
          this.errorMsg="";
          regForm.resetForm();

          setTimeout(()=>this.successMsg='',4000);

        } else {

          this.errorMsg="Registration failed.";
          this.successMsg='';
          setTimeout(()=>this.errorMsg='',4000);

        }

      },

      error:(err)=>{

        console.error(err);

        this.errorMsg="Something went wrong.";
        this.successMsg='';
        setTimeout(()=>this.errorMsg='',4000);

      }

    });

  }

}