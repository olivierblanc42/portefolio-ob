import { Component, OnInit } from '@angular/core';
import { DiplomeService } from '../../service/diplome/diplome.service';
@Component({
  selector: 'app-diplomes',
  imports: [],
  templateUrl: './diplomes.component.html',
  standalone: true,
  styleUrl: './diplomes.component.scss'
})
export class DiplomesComponent implements OnInit {


  constructor(
    private diplomeService: DiplomeService,

  ) { }


  ngOnInit(): void {
    
   this.diplomeService.getDiplome();

  }




}
