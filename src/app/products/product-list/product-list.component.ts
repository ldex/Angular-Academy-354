import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
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
  selectedProduct: Product | null;
  // subscription: Subscription;

  // Pagination
  pageSize = 5;
  start = 0;
  end = this.pageSize;
  pageNumber = 1;

  previousPage() {
    this.start -= this.pageSize;
    this.end -= this.pageSize;
    this.pageNumber--;
    this.selectedProduct = null;
  }

  nextPage() {
    this.start += this.pageSize;
    this.end += this.pageSize;
    this.pageNumber++;
    this.selectedProduct = null;
  }


  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  ngOnDestroy() {
   // this.subscription.unsubscribe();
  }

  constructor(private productService: ProductService) {
    this.products$ = this.productService.products$;

   // this.subscription = new Subscription();

    // this.subscription.add(
    //   productService
    //   .products$
    //   .subscribe(
    //     results => this.products = results
    //   )
    // );
  }

}
