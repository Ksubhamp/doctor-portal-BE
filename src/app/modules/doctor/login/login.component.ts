import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
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
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(5), Validators.required]],
    name: ['Dr. ', Validators.required],
    appointment_slot_time: ['', Validators.required],
    day_start_time: ['', Validators.required],
    day_end_time: ['', Validators.required],
  })
  submitted: boolean = false;
  isLogin: boolean = true;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private toastr: ToastrService,
    private router: Router,
    private striageSerive: LocalstorageService,

    private fb: FormBuilder
  ) {
    if (striageSerive.get('token')) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  get s(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((res: any) => {
        if (res.token) {
          this.striageSerive.set('token', res.token);

          // this.stroageService.set('token', res.token);
          this.dataService.isLogin.next(true);

          this.router.navigate(['/admin/dashboard']);
        }
      }, (err) => {
        this.toastr.error('Invalid credentials')
      })
    }
  }
  onSignup() {
    this.submitted = true;
    if (this.signupForm.valid) {
      this.authService.signup(this.sugnUpObj(this.signupForm.value)).subscribe((res: any) => {
        if (res.token) {
          this.striageSerive.set('token', res.token);
          this.dataService.isLogin.next(true);

          this.router.navigate(['/admin/dashboard']);
        }
      }, (err) => {
        this.toastr.error(err.error.message)

      })
    }
  }
  sugnUpObj(s: any) {
    return {
      "email": s.email,
      "password": s.password,
      "name": s.name,
      "doctor": {
        "doctor_name": s.name,
        "appointment_slot_time": s.appointment_slot_time,
        "day_start_time": s.day_start_time,
        "day_end_time": s.day_end_time
      }
    }
  }


}
