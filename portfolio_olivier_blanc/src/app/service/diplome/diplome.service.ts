import { Injectable } from '@angular/core';
import { Diplome } from '../../models';
import { diplomeList } from '../../data/diplomes';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DiplomeService {

  constructor() { }



  getDiplome(): Diplome[] {
    console.log(diplomeList)
      return diplomeList
 }


}
