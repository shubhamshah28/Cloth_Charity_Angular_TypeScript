import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-admin-donation',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-donation.component.html',
  styleUrl: './admin-donation.component.css'
})

export class AdminDonationComponent {

  data: any = [];
  volunteers: any = [];

  constructor(private srv: ApiService, private router: Router) { }

  ngOnInit() {

    // get donations (only Pending)
    this.srv.getDonations().subscribe((res: any) => {

      this.data = res.filter((x: any) => x.status == "Pending");

    });

    // get volunteers
    this.srv.getCities().subscribe((res: any) => {

      this.volunteers = res;

    });

  }


  setVolunteerDetails(d: any) {

    let v = this.volunteers.find(
      (x: any) => x.volunteer_name == d.volunteer
    );

    if (v) {

      d.volunteer_email = v.email;
      d.volunteer_contact = v.contact;

    }

  }


  // reject donation
  updateStatus(id: any, status: any) {

    this.srv.updateDonationStatus(id, status)
      .subscribe(() => {

        alert("Status Updated");

        this.ngOnInit();

      });

  }


  // accept donation
  acceptDonation(d: any) {

    if (!d.volunteer) {
      alert("Select Volunteer First");
      return;
    }

    if (!d.collectionDate) {
      alert("Select Collection Date");
      return;
    }

    this.srv.updateDonationStatus(

      d._id,
      "Accepted",
      d.volunteer,
      d.volunteer_email,
      d.volunteer_contact,
      d.collectionDate

    ).subscribe(() => {

      alert("Donation Accepted");

      // reload data
      this.ngOnInit();

    });

  }

}