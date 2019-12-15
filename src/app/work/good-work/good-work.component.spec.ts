import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodWorkComponent } from './good-work.component';

describe('GoodWorkComponent', () => {
  let component: GoodWorkComponent;
  let fixture: ComponentFixture<GoodWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
