import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewComponentnent } from './main-view.component';

describe('MainViewComponentnent', () => {
  let component: MainViewComponentnent;
  let fixture: ComponentFixture<MainViewComponentnent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewComponentnent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponentnent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
