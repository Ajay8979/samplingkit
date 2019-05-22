import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeerrorComponent } from './ageerror.component';

describe('AgeerrorComponent', () => {
  let component: AgeerrorComponent;
  let fixture: ComponentFixture<AgeerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeerrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
