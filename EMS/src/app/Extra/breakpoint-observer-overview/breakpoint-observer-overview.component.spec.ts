import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakpointObserverOverviewComponent } from './breakpoint-observer-overview.component';

describe('BreakpointObserverOverviewComponent', () => {
  let component: BreakpointObserverOverviewComponent;
  let fixture: ComponentFixture<BreakpointObserverOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakpointObserverOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakpointObserverOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
