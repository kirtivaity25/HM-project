import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffcontainerComponent } from './staffcontainer.component';

describe('StaffcontainerComponent', () => {
  let component: StaffcontainerComponent;
  let fixture: ComponentFixture<StaffcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
