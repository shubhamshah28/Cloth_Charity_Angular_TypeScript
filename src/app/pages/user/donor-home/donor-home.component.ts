import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-donor-home',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './donor-home.component.html',
    styleUrl: './donor-home.component.css'
})

export class DonorHomeComponent implements OnInit {

    stats: any = {};
    recent: any = [];

    constructor(private srv: ApiService) { }

    ngOnInit() {

        let id = sessionStorage.getItem("id");

        this.srv.getDonationStats(id).subscribe((res: any) => {
            this.stats = res;
        });

        this.srv.getDonations().subscribe((res: any) => {
            this.recent = res.slice(0, 5);
        });

    }

}