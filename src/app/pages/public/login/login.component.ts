import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login Form';
  email: string = "";
  password: string = "";
  data: any;
  msg: string = "";

  constructor(private srv: ApiService, private router: Router, private authService: AuthService) { }

  onClickSubmit(result: { email: string; password: string }) {
    this.email = result.email;
    this.password = result.password;

    this.srv.getlogdata(this.email, this.password).subscribe((dt: any) => {
      this.data = dt;

      if (this.data != "") {
        if (this.data[0].email == this.email) {
          if (this.data[0].password == this.password) {

            // Save session info
            sessionStorage.setItem("id", this.data[0]._id);
            sessionStorage.setItem("name", this.data[0].fullName);

            // Update AuthService
            this.authService.setFullName(this.data[0].fullName);

            if (this.email === "admin123@gmail.com" && this.password === "123") {
              this.authService.setRole('admin');
              this.router.navigate(['/admin_home']);
            } else {
              this.authService.setRole('user');
              this.router.navigate(['/donor_home']);
            }

          } else {
            this.msg = "Invalid Password...";
          }
        }
      } else {
        this.msg = "Invalid User Name...";
      }
    });
  }
}