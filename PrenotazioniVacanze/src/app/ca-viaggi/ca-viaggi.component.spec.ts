import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaViaggiComponent } from './ca-viaggi.component';

describe('CaViaggiComponent', () => {
  let component: CaViaggiComponent;
  let fixture: ComponentFixture<CaViaggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaViaggiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaViaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
