import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-add-volunteer',
standalone:true,
imports:[FormsModule,CommonModule],
templateUrl:'./add-volunteer.component.html',
styleUrl:'./add-volunteer.component.css'
})

export class AddVolunteerComponent{

state:string="Gujarat";
successMsg:string="";

constructor(private srv:ApiService){}

addVolunteer(data:any,frm:NgForm){

this.srv.addVolunteer(data).subscribe((res:any)=>{

// success message
this.successMsg="Volunteer Added Successfully";

// form reset
frm.resetForm();

// Gujarat fix again
this.state="Gujarat";

// hide message after 3 sec
setTimeout(()=>{
this.successMsg="";
},3000);

});

}

}