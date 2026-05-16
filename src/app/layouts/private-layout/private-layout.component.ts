import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
selector:'app-private-layout',
standalone:true,
imports:[RouterOutlet,RouterModule,CommonModule,HeaderComponent,FooterComponent],
templateUrl:'./private-layout.component.html',
styleUrl:'./private-layout.component.css'
})

export class PrivateLayoutComponent implements OnInit{

role:any;
sidebarOpen=false;

constructor(private auth:AuthService, private router:Router){}

ngOnInit(){
this.role=this.auth.getRole();
}

toggleSidebar(){
this.sidebarOpen=!this.sidebarOpen;
}

logout(){
this.auth.logout();
this.router.navigate(['/login']);
}

}