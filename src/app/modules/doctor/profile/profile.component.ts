import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(
    private toastr: ToastrService,
    private _dataSerivce: DataService
  ) {
    this._dataSerivce.getProfile().subscribe((res: any) => {
      if (res.status) this.profile = res.data
    }, (err) => {
      this.toastr.error(err.error.message)
    })
  }

  ngOnInit(): void {
  }

}
