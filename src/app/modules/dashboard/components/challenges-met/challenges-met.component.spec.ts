import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesMetComponent } from './challenges-met.component';

describe('ChallengesMetComponent', () => {
  let component: ChallengesMetComponent;
  let fixture: ComponentFixture<ChallengesMetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengesMetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesMetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
