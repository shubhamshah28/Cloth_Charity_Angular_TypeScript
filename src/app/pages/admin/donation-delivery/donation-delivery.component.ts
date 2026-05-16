import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-donation-delivery',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './donation-delivery.component.html',
    styleUrl: './donation-delivery.component.css'
})

export class DonationDeliveryComponent {
    data: any = [];
    constructor(private srv: ApiService, private router: Router) { }

    ngOnInit() {
        this.loadData();
    }

    loadData() {

        this.srv.getAcceptedDonations()
            .subscribe((res: any) => {
                this.data = res.filter((d: any) => d.delivered === "no");
            });
    }

    rowsearch(id: any) {
        sessionStorage.setItem("deliveryId", id);
        this.router.navigate(['/delivery_form']);
    }
}