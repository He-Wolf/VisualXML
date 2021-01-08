import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDataComponent } from './element-data.component';

describe('ElementDataComponent', () => {
  let component: ElementDataComponent;
  let fixture: ComponentFixture<ElementDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
