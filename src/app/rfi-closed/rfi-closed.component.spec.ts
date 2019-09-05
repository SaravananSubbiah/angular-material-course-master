import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfiClosedComponent } from './rfi-closed.component';

describe('RfiClosedComponent', () => {
  let component: RfiClosedComponent;
  let fixture: ComponentFixture<RfiClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfiClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfiClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
