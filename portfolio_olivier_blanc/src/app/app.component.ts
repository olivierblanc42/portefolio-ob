import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {faBars, faHouse} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FaIconComponent, RouterLink],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio_olivier_blanc';
  faBars = faBars;
  isMenuOpen = false;

  openMenu(): void {
    this.isMenuOpen = true;
  }

  closeMenuModale(): void {
    this.isMenuOpen = false;
  }


  protected readonly faHouse = faHouse;
}
