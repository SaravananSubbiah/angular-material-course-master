import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayContent1Component } from './overlay-content1.component';

describe('OverlayContent1Component', () => {
  let component: OverlayContent1Component;
  let fixture: ComponentFixture<OverlayContent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayContent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
