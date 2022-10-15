import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaPrenotazioniComponent } from './ca-prenotazioni.component';

describe('CaPrenotazioniComponent', () => {
  let component: CaPrenotazioniComponent;
  let fixture: ComponentFixture<CaPrenotazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaPrenotazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaPrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
