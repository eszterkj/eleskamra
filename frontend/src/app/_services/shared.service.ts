import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  categories = [
    { title: 'Húsáruk', url: 'husaruk' },
    { title: 'Zöldségek', url: 'zoldsegek' },
    { title: 'Gyümölcsök', url: 'gyumolcsok' },
    { title: 'Pékáruk', url: 'pekaruk' },
    { title: 'Tejtermékek', url: 'tejtermekek' },
    { title: 'Egyebek', url: 'egyebek' },
  ];

  getCategoryByUrl(url: string) {
    return this.categories.find((c) => c.url === url);
  }
}
