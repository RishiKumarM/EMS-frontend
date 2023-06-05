import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiSuccesfulComponent } from './regi-succesful.component';

describe('RegiSuccesfulComponent', () => {
  let component: RegiSuccesfulComponent;
  let fixture: ComponentFixture<RegiSuccesfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiSuccesfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiSuccesfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
