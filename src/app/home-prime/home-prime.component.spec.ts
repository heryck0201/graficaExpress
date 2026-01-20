import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePrimeComponent } from './home-prime.component';

describe('HomePrimeComponent', () => {
  let component: HomePrimeComponent;
  let fixture: ComponentFixture<HomePrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePrimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
