import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin = new Admin();
  msg = '';

  constructor(private loginuserservice: AdminService,
              private router: Router) { }

  ngOnInit(): void {
  }

  adminLogin(emailId: string, password: string){
    // Check if email and password match the predefined admin credentials
    if (emailId === 'admin@gmail.com' && password === 'admin') {
      // Navigate to admin-page route if credentials match
      this.router.navigate(['admin-page']);
      // Set token in localStorage (if needed)
      localStorage.setItem('token1', emailId);
      // Show success message
      this.msg = 'Successfully LoggedIn!';
    } else {
      // Show error message
      this.msg = 'Invalid!';
      // Alternatively, you can show an alert message
      // alert('Invalid credentials');
    }
  }

}

