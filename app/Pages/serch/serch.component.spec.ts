import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchComponent } from './serch.component';

describe('SerchComponent', () => {
  let component: SerchComponent;
  let fixture: ComponentFixture<SerchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerchComponent]
    });
    fixture = TestBed.createComponent(SerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
