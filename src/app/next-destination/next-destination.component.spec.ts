import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDestinationComponent } from './next-destination.component';

describe('NextDestinationComponent', () => {
  let component: NextDestinationComponent;
  let fixture: ComponentFixture<NextDestinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextDestinationComponent]
    });
    fixture = TestBed.createComponent(NextDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
