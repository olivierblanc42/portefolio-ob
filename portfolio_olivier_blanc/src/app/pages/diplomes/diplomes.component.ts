import { Component, OnInit } from '@angular/core';
import { DiplomeService } from '../../service/diplome/diplome.service';
import { Diplome } from '../../models';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {  faHouse } from '@fortawesome/free-solid-svg-icons';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-diplomes',
  imports: [FaIconComponent, RouterModule, CommonModule, CardComponent],
  templateUrl: './diplomes.component.html',
  standalone: true,
  styleUrl: './diplomes.component.scss'
})
export class DiplomesComponent implements OnInit {

  diplomes: Diplome[] | null = null;
  faHouse = faHouse;

  constructor(
    private diplomeService: DiplomeService,

  ) { }


  ngOnInit(): void {
    
    this.diplomes = this.diplomeService.getDiplome().sort((a, b) => b.years.getTime() - a.years.getTime());

  }




}
