import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckpostalComponent } from './checkpostal.component';


describe('CheckpostalComponent', () => {
  let component: CheckpostalComponent;
  let fixture: ComponentFixture<CheckpostalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckpostalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckpostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
