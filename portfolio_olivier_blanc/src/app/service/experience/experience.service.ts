import { Injectable } from '@angular/core';
import { experienceList } from '../../data/experiences';
import { Experience } from '../../models/experiences.model';
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getExperienceList(): Experience[]{
    return experienceList
  }
}
