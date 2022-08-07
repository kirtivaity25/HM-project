import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercontainerComponent } from './customercontainer.component';

describe('CustomercontainerComponent', () => {
  let component: CustomercontainerComponent;
  let fixture: ComponentFixture<CustomercontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomercontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
