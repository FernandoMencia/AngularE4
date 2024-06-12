import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroincrementComponent } from './otroincrement.component';

describe('OtroincrementComponent', () => {
  let component: OtroincrementComponent;
  let fixture: ComponentFixture<OtroincrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtroincrementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtroincrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
