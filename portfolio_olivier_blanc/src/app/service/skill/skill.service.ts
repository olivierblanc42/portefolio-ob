import { Injectable } from '@angular/core';
import { Skill } from '../../models';
import { skillList } from '../../data/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }


  getSkill(): Skill[]  {
    console.log(skillList);
    return skillList
  }
}
