import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaAdminComponent } from './ca-admin.component';

describe('CaAdminComponent', () => {
  let component: CaAdminComponent;
  let fixture: ComponentFixture<CaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
