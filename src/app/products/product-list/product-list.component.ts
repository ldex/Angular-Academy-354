import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnDestroy {

  title: string = 'Products';
  products: Product[];
  products$: Observable<Product[]>;
  selectedProduct: Product;
  subscription: Subscription;

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  ngOnDestroy() {
   // this.subscription.unsubscribe();
  }

  constructor(private productService: ProductService) {
   // this.subscription = new Subscription();
    this.products$ = productService.products$;
    // this.subscription.add(
    //   productService
    //   .products$
    //   .subscribe(
    //     results => this.products = results
    //   )
    // );

  }

}
