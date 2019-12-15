import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadWorkComponent } from './bad-work.component';

describe('BadWorkComponent', () => {
  let component: BadWorkComponent;
  let fixture: ComponentFixture<BadWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
