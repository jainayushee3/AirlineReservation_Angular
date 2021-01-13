import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightstwoComponent } from './flightstwo.component';

describe('FlightstwoComponent', () => {
  let component: FlightstwoComponent;
  let fixture: ComponentFixture<FlightstwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightstwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
