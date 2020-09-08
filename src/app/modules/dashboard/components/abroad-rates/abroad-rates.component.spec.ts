import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadRatesComponent } from './abroad-rates.component';

describe('AbroadRatesComponent', () => {
  let component: AbroadRatesComponent;
  let fixture: ComponentFixture<AbroadRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbroadRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbroadRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
