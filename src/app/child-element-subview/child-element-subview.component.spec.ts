import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildElementSubviewComponent } from './child-element-subview.component';

describe('ChildElementSubviewComponent', () => {
  let component: ChildElementSubviewComponent;
  let fixture: ComponentFixture<ChildElementSubviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildElementSubviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildElementSubviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
