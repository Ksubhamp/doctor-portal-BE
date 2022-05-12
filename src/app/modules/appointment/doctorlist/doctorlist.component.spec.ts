import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorlistComponent } from './doctorlist.component';
 import {DataService  } from "../../../service/data.service";
import { HttpClientModule } from '@angular/common/http';

describe('DoctorlistComponent', () => {
  let component: DoctorlistComponent;
  let fixture: ComponentFixture<DoctorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorlistComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
   });
});
