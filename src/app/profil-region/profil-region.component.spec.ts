import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilRegionComponent } from './profil-region.component';

describe('ProfilRegionComponent', () => {
  let component: ProfilRegionComponent;
  let fixture: ComponentFixture<ProfilRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
