import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchOrdersPage } from './search-orders.page';

describe('SearchOrdersPage', () => {
  let component: SearchOrdersPage;
  let fixture: ComponentFixture<SearchOrdersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
