import { Component, OnInit } from '@angular/core';
import { Hobby } from '../../models';
import { HobbieService } from '../../service/hobbie/hobbie.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from '../../components/card/card.component';
import { MenuComponent } from "../../components/menu/menu.component";

@Component({
  selector: 'app-loisirs',
  imports: [FaIconComponent, RouterModule, CommonModule, CardComponent, MenuComponent],
  templateUrl: './loisirs.component.html',
  standalone: true,
  styleUrl: './loisirs.component.scss'
})
export class LoisirsComponent implements OnInit {

  hobbies: Hobby[] | null = null;
  faHouse = faHouse;


  constructor(
    private hobbieService: HobbieService

  ) {
  }
  ngOnInit(): void {
    this.hobbies = this.hobbieService.getHobby();

  }

}
