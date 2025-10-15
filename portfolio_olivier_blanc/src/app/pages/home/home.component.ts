import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
    imports: [
        RouterLink ,FaIconComponent
    ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faEnvelope = faEnvelope;

}
