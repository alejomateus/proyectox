import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPromoComponent } from './month-promo.component';

describe('MonthPromoComponent', () => {
  let component: MonthPromoComponent;
  let fixture: ComponentFixture<MonthPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
