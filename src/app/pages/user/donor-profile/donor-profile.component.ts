import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-donor-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './donor-profile.component.html',
  styleUrl: './donor-profile.component.css'
})

export class DonorProfileComponent implements OnInit {

data:any={};

id:any=sessionStorage.getItem('id');

constructor(private srv:ApiService){}

ngOnInit(){

this.srv.regsearch(this.id).subscribe((res:any)=>{

this.data=res[0];

});

}

}