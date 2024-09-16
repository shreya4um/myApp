import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderDetails2Page } from './order-details2.page';

describe('OrderDetails2Page', () => {
  let component: OrderDetails2Page;
  let fixture: ComponentFixture<OrderDetails2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetails2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
