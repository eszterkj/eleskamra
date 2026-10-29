import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage.component/homepage.component';
import { PageRoutes } from './_constants/page_routes';
import { ProductsPageComponent } from './products-page.component/products-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: PageRoutes.products,
    component: ProductsPageComponent,
  },
  {
    path: PageRoutes.products,
    data: { title: 'Termékek' },
    children: [
      {
        path: ':category',
        component: ProductsPageComponent,
      },
    ],
  },
];
