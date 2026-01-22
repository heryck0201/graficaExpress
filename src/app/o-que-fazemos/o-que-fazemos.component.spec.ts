import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OQueFazemosComponent } from './o-que-fazemos.component';

describe('OQueFazemosComponent', () => {
  let component: OQueFazemosComponent;
  let fixture: ComponentFixture<OQueFazemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OQueFazemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OQueFazemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
