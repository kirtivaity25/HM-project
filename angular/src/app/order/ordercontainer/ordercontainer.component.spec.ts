import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercontainerComponent } from './ordercontainer.component';

describe('OrdercontainerComponent', () => {
  let component: OrdercontainerComponent;
  let fixture: ComponentFixture<OrdercontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdercontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
