import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayContent2Component } from './overlay-content2.component';

describe('OverlayContent2Component', () => {
  let component: OverlayContent2Component;
  let fixture: ComponentFixture<OverlayContent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayContent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
