import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheRegionComponent } from './fiche-region.component';

describe('FicheRegionComponent', () => {
  let component: FicheRegionComponent;
  let fixture: ComponentFixture<FicheRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
