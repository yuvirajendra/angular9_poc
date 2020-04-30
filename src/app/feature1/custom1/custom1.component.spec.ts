import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Custom1Component } from './custom1.component';

describe('Custom1Component', () => {
  let component: Custom1Component;
  let fixture: ComponentFixture<Custom1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Custom1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Custom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
