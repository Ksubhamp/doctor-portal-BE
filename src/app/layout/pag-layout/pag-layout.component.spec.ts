import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagLayoutComponent } from './pag-layout.component';

describe('PagLayoutComponent', () => {
  let component: PagLayoutComponent;
  let fixture: ComponentFixture<PagLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
