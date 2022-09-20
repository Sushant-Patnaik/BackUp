import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Doctor } from './doctor';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  });
});

describe('Doctor', () => {
  it('should create an instance', () => {
    expect(new Doctor()).toBeTruthy();
  });
});
