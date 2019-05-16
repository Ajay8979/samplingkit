import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcodeerrorComponent } from './postcodeerror.component';

describe('PostcodeerrorComponent', () => {
  let component: PostcodeerrorComponent;
  let fixture: ComponentFixture<PostcodeerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcodeerrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcodeerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
