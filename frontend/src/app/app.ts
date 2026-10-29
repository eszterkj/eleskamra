import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './_constants/header.component/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  isCollapsed = false;
}
