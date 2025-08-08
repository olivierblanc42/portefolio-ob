import { Component, OnInit } from '@angular/core';
import { DiplomeService } from '../../service/diplome/diplome.service';
import { Diplome } from '../../models';
@Component({
  selector: 'app-diplomes',
  imports: [],
  templateUrl: './diplomes.component.html',
  standalone: true,
  styleUrl: './diplomes.component.scss'
})
export class DiplomesComponent implements OnInit {

  diplome: Diplome[] | null = null;
  
  constructor(
    private diplomeService: DiplomeService,

  ) { }


  ngOnInit(): void {
    
  this.diplome = this.diplomeService.getDiplome();

  }




}
