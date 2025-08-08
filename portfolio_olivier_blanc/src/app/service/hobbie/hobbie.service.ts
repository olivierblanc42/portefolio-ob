import { Injectable } from '@angular/core';
import { Hobby } from '../../models';
import { hobbiesList } from '../../data/hobbies';

@Injectable({
  providedIn: 'root'
})
export class HobbieService {
  
  constructor() { }


  getHobby(): Hobby[]{
    return hobbiesList;
  }
}
