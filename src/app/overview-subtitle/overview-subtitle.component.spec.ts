import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSubtitleComponent } from './overview-subtitle.component';

describe('OverviewSubtitleComponent', () => {
  let component: OverviewSubtitleComponent;
  let fixture: ComponentFixture<OverviewSubtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewSubtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
