import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaAlloggiComponent } from './ca-alloggi.component';

describe('CaAlloggiComponent', () => {
  let component: CaAlloggiComponent;
  let fixture: ComponentFixture<CaAlloggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaAlloggiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaAlloggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
