import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangementStatutComponent } from './changement-statut.component';

describe('ChangementStatutComponent', () => {
  let component: ChangementStatutComponent;
  let fixture: ComponentFixture<ChangementStatutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangementStatutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangementStatutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
