import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-donation-history',
standalone:true,
imports:[CommonModule],
templateUrl:'./donation-history.component.html',
styleUrl:'./donation-history.component.css'
})

export class DonationHistoryComponent implements OnInit{

data:any=[];
userid:any=sessionStorage.getItem("id");

constructor(private srv:ApiService){}

ngOnInit(){

this.srv.getUserDonations(this.userid)
.subscribe((res:any)=>{

this.data=res;

});

}

}