import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-delivery-form',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './delivery-form.component.html',
    styleUrl: './delivery-form.component.css'
})

export class DeliveryFormComponent {

    id: any;

    constructor(private srv: ApiService, private router: Router) { }

    ngOnInit() {

        this.id = sessionStorage.getItem("deliveryId");

        console.log("Delivery ID:", this.id);

    }

    submitDelivery(data: any) {

        data.deliveryId = this.id;

        this.srv.insertDelivery(data)
            .subscribe(() => {

                this.srv.deliverDonation(this.id)
                    .subscribe(() => {

                        alert("Delivery Completed Successfully");

                        this.router.navigate(['/donation_delivery']);

                    });

            });

    }

    cancel() {

        this.router.navigate(['donation_delivery']);

    }

}