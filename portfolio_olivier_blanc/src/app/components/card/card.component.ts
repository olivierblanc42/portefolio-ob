import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ui-card',
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() size: "card-skill" | "card-diplome" | "card-hobby" | "card-realization" |"card-experience" = "card-skill";

}
