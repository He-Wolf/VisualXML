import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpathModalComponent } from './xpath-modal.component';

describe('XpathModalComponent', () => {
  let component: XpathModalComponent;
  let fixture: ComponentFixture<XpathModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpathModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XpathModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
