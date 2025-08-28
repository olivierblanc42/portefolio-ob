import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FaIconComponent, RouterModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  faHouse = faHouse;
  ngOnInit(): void {
  }
 


  
}
