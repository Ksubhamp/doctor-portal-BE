import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';
import { AuthService } from 'src/app/service/auth.service';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrom = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',Validators.required],
  })
  constructor(
    private stroageService: LocalstorageService,
    private authService: AuthService,
    private dataService: DataService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    if (stroageService.get('token')) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if (this.loginFrom.valid) {
      this.authService.login(this.loginFrom.value).subscribe((res:any)=>{
        if (res.token) {
          this.stroageService.set('token',res.token);
          this.router.navigate(['/admin/dashboard']);
        }
      })
    }
  }


}
