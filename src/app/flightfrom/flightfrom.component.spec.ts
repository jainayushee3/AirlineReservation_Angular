import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightfromComponent } from './flightfrom.component';

describe('FlightfromComponent', () => {
  let component: FlightfromComponent;
  let fixture: ComponentFixture<FlightfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightfromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
