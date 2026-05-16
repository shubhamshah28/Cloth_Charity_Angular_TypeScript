import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-donation-form',
standalone:true,
imports:[FormsModule,CommonModule],
templateUrl:'./donation-form.component.html',
styleUrl:'./donation-form.component.css'
})

export class DonationFormComponent implements OnInit{

cities:any=[];
successMsg:string="";
userData:any;          // user data store
userid:any;

constructor(private srv:ApiService){}

ngOnInit(){

// session id
this.userid = sessionStorage.getItem("id");

// register table se user data fetch
this.srv.regsearch(this.userid).subscribe((res:any)=>{
this.userData = res[0];
});

// city list (future use)
this.srv.getCities().subscribe((res:any)=>{
this.cities=res;
});

}

submitDonation(data:any, frm:NgForm){

// user info
data.userid = this.userid;
data.username = this.userData.fullName;

// ⭐ register table se city add
data.city = this.userData.city;

this.srv.insertDonation(data).subscribe((res:any)=>{

// success message
this.successMsg="Donation request submitted. Please wait for admin approval.";

// form clear
frm.resetForm();

// message hide after 4 sec
setTimeout(()=>{
this.successMsg="";
},4000);

});

}

}