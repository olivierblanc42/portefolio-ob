import { ExperienceService } from './../../service/experience/experience.service';
import { Experience } from './../../models/experiences.model';
import { Component, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../../components/card/card.component';
import { MenuComponent } from "../../components/menu/menu.component";

@Component({
  selector: 'app-experience',
  imports: [FaIconComponent, RouterModule, CommonModule, CardComponent, MenuComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit{
  experiences: Experience[] |null = null;
  faHouse = faHouse;


  constructor(
    private experienceService : ExperienceService
  ){

  }
  ngOnInit(): void {
 this.experiences = this.experienceService.getExperienceList();
  }

  

}
