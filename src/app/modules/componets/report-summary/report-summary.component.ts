import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-report-summary',
  templateUrl: './report-summary.component.html',
  styleUrls: ['./report-summary.component.css']
})
export class ReportSummaryComponent implements OnInit {
  @Input() data:any[]=[];
  constructor(
    private dataService :DataService
  ) { }

  ngOnInit(): void {
  }

  downloadPdf(id:string){
    this.dataService.downloadPdf(id);
    
  }

}
