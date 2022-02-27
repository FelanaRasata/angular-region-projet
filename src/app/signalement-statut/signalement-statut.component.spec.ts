import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalementStatutComponent } from './signalement-statut.component';

describe('SignalementStatutComponent', () => {
  let component: SignalementStatutComponent;
  let fixture: ComponentFixture<SignalementStatutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalementStatutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalementStatutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
