import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  doctorData: any;
  test:any="";
  slots: any = [];
  doctor_id: any = '';
  minDate:any='';
  submitted:boolean= false;
  appointmentFrom = this.fb.group({
    doctor_id: ['',Validators.required],
    appointment_date: ['',Validators.required],
    appointment_time: ['',Validators.required],
    patient_name: ['',Validators.required],
    patinet_email: ['', [Validators.required, Validators.email]],
    patinet_phone: ['',[
      Validators.required,
      Validators.pattern("[0-9 ]{10}"),
      // Validators.minLength(10),
      // Validators.maxLength(10)
    ]]
  })
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.doctor_id = params['id'];
      this.appointmentFrom.controls['doctor_id'].setValue(this.doctor_id);
      let d = new Date;
      d.setDate(d.getDate() + 1)
      this.minDate = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0')
      d.setHours(0, 0, 0, 0)
      this.appointmentFrom.controls['appointment_date'].setValue(this.getDateFormat(d));
      this.setSlots(d)

    });
    
  }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.appointmentFrom.controls;
  }

  setSlots(d: any) {

    this.dataService.appointmentDetalis(d, this.doctor_id).subscribe((res: any) => {

      this.doctorData = res.data.doctor;
      this.slots = res.data.slots;
      this.appointmentFrom.controls['appointment_time'].setValue('');

    }, (err) => { })
  }

  check(){
    this.toastr.success('sduj');

  }
  onSubmit() {
    console.log(this.appointmentFrom.value);
    this.submitted = true
    if (this.appointmentFrom.valid) {
      this.dataService.bookAppointment(this.appointmentFrom.value).subscribe((res: any) => {
        if (res.status) {
          this.toastr.success(res.message);
          this.appointmentFrom.reset()
          this.router.navigate(['/'])
        }

      }, (err) => {

      })

    }

  }
  getSlots(e: any) {
    console.log(e.target.value);
    let d = new Date(e.target.value)
    d.setHours(0, 0, 0, 0);
    this.test = d
    this.setSlots(d)

  }
  getDateFormat(d: Date) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0')
  }

}
