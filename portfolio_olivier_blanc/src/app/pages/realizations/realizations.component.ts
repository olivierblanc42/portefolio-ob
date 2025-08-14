import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-realisations',
  imports: [FaIconComponent,RouterModule,],
  templateUrl: './realizations.component.html',
  standalone: true,
  styleUrl: './realizations.component.scss'
})
export class RealizationsComponent implements OnInit{
  faHouse = faHouse;

  ngOnInit(): void {
    
  }

}
