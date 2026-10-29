import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  private texts: any = {};

  constructor(private http: HttpClient) {}

  loadTexts(): Promise<void> {
    return new Promise((resolve) => {
      this.http.get('assets/texts.json').subscribe((data) => {
        this.texts = data;
        resolve();
      });
    });
  }

  get(key: string): string {
    const value = key.split('.').reduce((obj, part) => obj?.[part], this.texts);

    return value || key;
  }
}
