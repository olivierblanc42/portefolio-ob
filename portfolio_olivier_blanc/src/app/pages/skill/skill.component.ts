import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models';
import { SkillService } from '../../service/skill/skill.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-skill',
  imports: [FaIconComponent, RouterModule, CommonModule, CardComponent],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent implements OnInit {

  skills: Skill[] | null = null;
  faHouse = faHouse;
  constructor(
    private skillService: SkillService,

  ) { }
  ngOnInit(): void {

  this.skills = this.skillService.getSkill()

  }




}
