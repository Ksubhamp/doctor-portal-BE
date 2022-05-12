import { TestBed } from '@angular/core/testing';

import { LocalstorageService } from './localstorage.service';

fdescribe('LocalstorageService', () => {
  let service: LocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('Set localstroage', () => {
    let name = 'token';
    let value = "sdkjd78sdf43e9809s349083489sjt84"
    service.set(name,value);
    let check = service.get(name);
    expect(check).toEqual(value);
  });


  it('Delete localstroage', () => {
    let name = 'token';
    let value = "sdkjd78sdf43e9809s349083489sjt84"
    service.set(name,value);
    let check = service.remove(name);
    console.log(check);
    expect(check).toEqual(undefined);
  });




});
