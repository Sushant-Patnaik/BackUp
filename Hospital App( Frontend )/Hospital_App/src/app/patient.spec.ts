import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Patient } from './patient';





beforeEach(() => {
  TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  });
});

describe('Patient', () => {
  it('should create an instance', () => {
    expect(new Patient()).toBeTruthy();
  });
});
