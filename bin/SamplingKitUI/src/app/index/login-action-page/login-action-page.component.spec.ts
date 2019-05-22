import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginActionPageComponent } from './login-action-page.component';

describe('LoginActionPageComponent', () => {
  let component: LoginActionPageComponent;
  let fixture: ComponentFixture<LoginActionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginActionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginActionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
