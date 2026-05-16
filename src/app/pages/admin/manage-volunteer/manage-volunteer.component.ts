import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
selector:'app-manage-volunteer',
standalone:true,
imports:[NgFor,FormsModule,RouterModule],
templateUrl:'./manage-volunteer.component.html',
styleUrl:'./manage-volunteer.component.css'
})

export class ManageVolunteerComponent{

data:any;

constructor(
private srv:ApiService,
private router:Router
){

srv.getVolunteers().subscribe((dt)=>{

this.data=dt;
console.log(dt);

});

}


// DELETE
deleteVolunteer(id:string){

this.srv.deleteVolunteer(id).subscribe(()=>{

this.srv.getVolunteers().subscribe((dt)=>{

this.data=dt;

});

});

}


// UPDATE
rowsearch(id:string){

sessionStorage.setItem("id",id);

this.router.navigate(['/update_volunteer']);

}

}