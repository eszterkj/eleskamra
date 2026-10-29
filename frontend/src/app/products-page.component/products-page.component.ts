import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';

import { ProductsService } from '../_services/product.service';
import { ProductModel } from '../_models/product.model';
import { SharedService } from '../_services/shared.service';

@Component({
  selector: 'app-products-page.component',
  imports: [CommonModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private shared: SharedService,
    private route: ActivatedRoute,
  ) {}

  filteredProducts$!: Observable<ProductModel[]>;

  private slugToCategoryMap: Record<string, string> = {
    husaruk: 'Húsáru',
    gyumolcsok: 'Gyümölcs',
    zoldsegek: 'Zöldség',
    tejtermekek: 'Tejtermék',
    pekaruk: 'Pékáru',
    egyebek: 'Egyéb',
  };

  ngOnInit() {
    const products$ = this.productService.getProducts();

    const filter$ = this.route.paramMap.pipe(
      map((params) => {
        const categoryUrl = params.get('category');

        if (!categoryUrl) return null;

        return this.shared.getCategoryByUrl(categoryUrl)?.title ?? null;
      }),
    );

    this.filteredProducts$ = combineLatest([products$, filter$]).pipe(
      map(([products, filter]) =>
        filter ? products.filter((p) => p.category === filter) : products,
      ),
    );
  }
}
