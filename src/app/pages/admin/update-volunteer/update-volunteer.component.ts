import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-update-volunteer',
standalone:true,
imports:[FormsModule,RouterModule,CommonModule],
templateUrl:'./update-volunteer.component.html',
styleUrl:'./update-volunteer.component.css'
})

export class UpdateVolunteerComponent implements OnInit{

data:any=[];
id:any=sessionStorage.getItem("id");

constructor(
private srv:ApiService,
private router:Router
){}

ngOnInit(){

// VOLUNTEER DATA
this.srv.searchVolunteer(this.id).subscribe((dt:any)=>{

this.data=dt;

if(this.data && this.data.length>0){
this.data[0].state="Gujarat";
}

});

}

volSubmit(frmdata:any){

frmdata.state="Gujarat";

this.srv.updateVolunteer(frmdata,this.id).subscribe(()=>{

this.router.navigate(['/manage_volunteer']);

});

}

}