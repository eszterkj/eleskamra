import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageRoutes } from '../_constants/page_routes';

@Component({
  selector: 'app-homepage.component',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  constructor(private router: Router) {}

  navigateTo(dest: string) {
    this.router.navigate([PageRoutes.products]);
  }
}
