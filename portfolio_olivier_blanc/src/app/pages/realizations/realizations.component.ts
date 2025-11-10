import { RealizationService } from './../../service/realization/realization.service';
import { realizationList } from './../../data/realizations';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Realization } from '../../models';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { MenuComponent } from "../../components/menu/menu.component";

@Component({
  selector: 'app-realisations',
  imports: [ RouterModule, CommonModule, CardComponent, MenuComponent],
  templateUrl: './realizations.component.html',
  standalone: true,
  styleUrl: './realizations.component.scss'
})
export class RealizationsComponent implements OnInit{
  faHouse = faHouse;
  realizations:Realization[] |null = null;

 constructor(
   private realizationSevice: RealizationService
 ){

 }

  ngOnInit(): void {
    this.realizations = this.realizationSevice.getRealization();
  }

}
