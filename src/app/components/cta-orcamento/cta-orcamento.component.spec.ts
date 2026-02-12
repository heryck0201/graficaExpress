import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaOrcamentoComponent } from './cta-orcamento.component';

describe('CtaOrcamentoComponent', () => {
  let component: CtaOrcamentoComponent;
  let fixture: ComponentFixture<CtaOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaOrcamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
