import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alarts',
  templateUrl: './product-alarts.component.html',
  styleUrls: ['./product-alarts.component.css']
})
export class ProductAlartsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

}
