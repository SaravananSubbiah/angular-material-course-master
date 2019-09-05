import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayContent3Component } from './overlay-content3.component';

describe('OverlayContent3Component', () => {
  let component: OverlayContent3Component;
  let fixture: ComponentFixture<OverlayContent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayContent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
