import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaPacchettiComponent } from './ca-pacchetti.component';

describe('CaPacchettiComponent', () => {
  let component: CaPacchettiComponent;
  let fixture: ComponentFixture<CaPacchettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaPacchettiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaPacchettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
