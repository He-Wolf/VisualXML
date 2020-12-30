import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildElementViewComponent } from './child-element-view.component';

describe('ChildElementViewComponent', () => {
  let component: ChildElementViewComponent;
  let fixture: ComponentFixture<ChildElementViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildElementViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildElementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
