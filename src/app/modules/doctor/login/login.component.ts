import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrom = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {
    if (dataService.getCookie('token')) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.loginFrom.valid) {
      this.authService.login(this.loginFrom.value).subscribe((res: any) => {
        if (res.token) {
          this.dataService.setCookie('token', res.token);

          // this.stroageService.set('token', res.token);
          this.dataService.isLogin.next(true);

          this.router.navigate(['/admin/dashboard']);
        }
      })
    }
  }


}
