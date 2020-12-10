import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveasModalComponent } from './saveas-modal.component';

describe('SaveasModalComponent', () => {
  let component: SaveasModalComponent;
  let fixture: ComponentFixture<SaveasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveasModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
