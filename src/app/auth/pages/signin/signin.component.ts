import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastersvc: ToastrService
  ) { }
 
  
  user = {
    email: '',
    password: ''

 }

  ngOnInit(): void {
  }

  login() {
    this.authService.signin(this.user).subscribe(res => {
      
      localStorage.setItem('token', res.token);
      this.toastersvc.success( "Sesion Iniciada", 'Exito');
      this.router.navigate(['/corrales/listarCorrales']);

    } ,
    err => {
      
      this.toastersvc.error( err.error, 'Error');
    }
    )
  }

}
