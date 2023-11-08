import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlartsComponent } from './product-alarts.component';

describe('ProductAlartsComponent', () => {
  let component: ProductAlartsComponent;
  let fixture: ComponentFixture<ProductAlartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAlartsComponent]
    });
    fixture = TestBed.createComponent(ProductAlartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
