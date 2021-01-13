import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlighttoComponent } from './flightto.component';

describe('FlighttoComponent', () => {
  let component: FlighttoComponent;
  let fixture: ComponentFixture<FlighttoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlighttoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlighttoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
