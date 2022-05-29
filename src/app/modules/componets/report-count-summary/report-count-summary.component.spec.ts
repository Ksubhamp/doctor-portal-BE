import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCountSummaryComponent } from './report-count-summary.component';

describe('ReportCountSummaryComponent', () => {
  let component: ReportCountSummaryComponent;
  let fixture: ComponentFixture<ReportCountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCountSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
