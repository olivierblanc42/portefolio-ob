import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models';
import { SkillService } from '../../service/skill/skill.service';


@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent implements OnInit {

  skills: Skill[] | null = null;

  constructor(
    private skillService: SkillService,

  ) { }
  ngOnInit(): void {

  this.skills = this.skillService.getSkill()

  }




}
