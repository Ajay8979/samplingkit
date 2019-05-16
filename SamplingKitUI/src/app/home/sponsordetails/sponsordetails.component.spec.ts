import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsordetailsComponent } from './sponsordetails.component';

describe('SponsordetailsComponent', () => {
  let component: SponsordetailsComponent;
  let fixture: ComponentFixture<SponsordetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsordetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
