import { Component, OnInit } from '@angular/core';
import { Hobby } from '../../models';
import { HobbieService } from '../../service/hobbie/hobbie.service';
@Component({
  selector: 'app-loisirs',
  imports: [],
  templateUrl: './loisirs.component.html',
  standalone: true,
  styleUrl: './loisirs.component.scss'
})
export class LoisirsComponent implements OnInit {

  hobbies: Hobby[] | null = null;


  constructor(
    private hobbieService: HobbieService

  ) {
  }
  ngOnInit(): void {
    this.hobbies = this.hobbieService.getHobby();

  }

}
