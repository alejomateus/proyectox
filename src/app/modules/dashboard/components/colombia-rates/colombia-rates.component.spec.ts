import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombiaRatesComponent } from './colombia-rates.component';

describe('ColombiaRatesComponent', () => {
  let component: ColombiaRatesComponent;
  let fixture: ComponentFixture<ColombiaRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColombiaRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColombiaRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
