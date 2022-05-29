import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-report-count-summary',
  templateUrl: './report-count-summary.component.html',
  styleUrls: ['./report-count-summary.component.css']
})
export class ReportCountSummaryComponent implements OnInit {
  @Input() data:any[]=[];

  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
  }
  downloadPdf(id:string){
    this.dataService.downloadPdf(id);
  }
}
