import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donation-delivered',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donation-delivered.component.html',
  styleUrl: './donation-delivered.component.css'
})
export class DonationDeliveredComponent {
data:any=[];

constructor(private srv:ApiService){}

ngOnInit(){

this.srv.getDeliveryRecords()
.subscribe((res:any)=>{

this.data=res;

});

}
}
