import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasImpressaoComponent } from './tecnologias-impressao.component';

describe('TecnologiasImpressaoComponent', () => {
  let component: TecnologiasImpressaoComponent;
  let fixture: ComponentFixture<TecnologiasImpressaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiasImpressaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiasImpressaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
