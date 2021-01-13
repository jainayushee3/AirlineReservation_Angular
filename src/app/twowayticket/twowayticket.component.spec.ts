import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayticketComponent } from './twowayticket.component';

describe('TwowayticketComponent', () => {
  let component: TwowayticketComponent;
  let fixture: ComponentFixture<TwowayticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowayticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowayticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
