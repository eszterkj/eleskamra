import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { PageRoutes } from '../page_routes';
import { SharedService } from '../../_services/shared.service';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { TextPipe } from '../../_pipes/text-pipe';

@Component({
  selector: 'app-header-component',
  imports: [NzButtonComponent, TextPipe],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(
    private shared: SharedService,
    private router: Router,
  ) {}

  title: string = '';
  filter: string = '';

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const url = this.router.url;
      const parts = url.split('/').filter(Boolean);

      if (parts[0] === 'termekek') {
        if (parts.length === 1) {
          this.title = 'Termékek';
        } else {
          this.title = `${this.formatCategory(parts[1])}`;
        }
      } else {
        this.title = '';
      }
    });
  }

  formatCategory(categoryUrl: string): string {
    return this.shared.getCategoryByUrl(categoryUrl)?.title ?? categoryUrl;
  }

  setFilter(categoryUrl: string | null) {
    if (categoryUrl) {
      this.router.navigate([PageRoutes.products, categoryUrl]);
    } else {
      this.router.navigate([PageRoutes.products]);
    }
  }
}
