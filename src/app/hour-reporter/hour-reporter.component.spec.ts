import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourReporterComponent } from './hour-reporter.component';

describe('HourReporterComponent', () => {
  let component: HourReporterComponent;
  let fixture: ComponentFixture<HourReporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourReporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourReporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
