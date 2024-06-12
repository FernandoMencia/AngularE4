import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrodecrementComponent } from './otrodecrement.component';

describe('OtrodecrementComponent', () => {
  let component: OtrodecrementComponent;
  let fixture: ComponentFixture<OtrodecrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrodecrementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtrodecrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
