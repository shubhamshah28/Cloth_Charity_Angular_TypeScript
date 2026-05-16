import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent {
  volunteers = [
    { name: 'Amit Sharma', img: '/assets/vol1.jpg' },
    { name: 'Priya Patel', img: '/assets/vol2.jpg' },
    { name: 'Rahul Mehta', img: '/assets/vol3.jpg' },
    { name: 'Sneha Rao', img: '/assets/vol4.jpg' },
    { name: 'Vikram Singh', img: '/assets/vol5.jpg' },
    { name: 'Neha Verma', img: '/assets/vol6.jpg' }
  ];
}
