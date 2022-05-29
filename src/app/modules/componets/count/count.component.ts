import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  @Input() value:any;
  @Input() title:any;
  @Input() bgcolor:any;
  constructor() { }

  ngOnInit(): void {
  }

}
