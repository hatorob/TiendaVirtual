import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatprimoComponent } from './patprimo.component';

describe('PatprimoComponent', () => {
  let component: PatprimoComponent;
  let fixture: ComponentFixture<PatprimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatprimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatprimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
