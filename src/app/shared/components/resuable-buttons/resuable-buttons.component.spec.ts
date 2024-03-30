import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableButtonsComponent } from './resuable-buttons.component';

describe('ResuableButtonsComponent', () => {
  let component: ResuableButtonsComponent;
  let fixture: ComponentFixture<ResuableButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResuableButtonsComponent]
    });
    fixture = TestBed.createComponent(ResuableButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
