import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ShowPatientComponent } from './show-patient.component';

describe('ShowPatientComponent', () => {
  let component: ShowPatientComponent;
  let fixture: ComponentFixture<ShowPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ ShowPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
