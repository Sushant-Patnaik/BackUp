import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNotFoundComponent } from './component-not-found.component';

describe('ComponentNotFoundComponent', () => {
  let component: ComponentNotFoundComponent;
  let fixture: ComponentFixture<ComponentNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ ComponentNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
