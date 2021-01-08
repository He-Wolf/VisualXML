import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildElementsComponent } from './child-elements.component';

describe('ChildElementsComponent', () => {
  let component: ChildElementsComponent;
  let fixture: ComponentFixture<ChildElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
