import { Injectable } from '@angular/core';
import { realizationList } from '../../data/realizations' ;

@Injectable({
  providedIn: 'root'
})
export class RealizationService {

  constructor() { }


  getRealization(){
    return realizationList
  }

}
