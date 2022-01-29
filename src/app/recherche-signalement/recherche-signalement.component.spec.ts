import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheSignalementComponent } from './recherche-signalement.component';

describe('RechercheSignalementComponent', () => {
  let component: RechercheSignalementComponent;
  let fixture: ComponentFixture<RechercheSignalementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheSignalementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheSignalementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
