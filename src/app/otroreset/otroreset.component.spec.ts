import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroresetComponent } from './otroreset.component';

describe('OtroresetComponent', () => {
  let component: OtroresetComponent;
  let fixture: ComponentFixture<OtroresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtroresetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtroresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
