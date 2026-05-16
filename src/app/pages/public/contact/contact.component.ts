import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

  data: any = {};

  constructor(private srv: ApiService) { }

  sendMessage() {

    if (!this.data.name || !this.data.email || !this.data.message) {
      alert("Please fill all fields");
      return;
    }

    this.srv.sendContact(this.data)
      .subscribe((res: any) => {

        alert("Message Sent Successfully");

        this.data = {};

      });

  }

}