import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { NgForm, FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FaIconComponent, RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  faHouse = faHouse;
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),

  })

  ngOnInit(): void {
  }


  isInvalidAndTouchedOrDirty(formControl: FormControl) {
    return formControl.invalid && (formControl.touched || formControl.dirty);
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return
    }
    console.log(this.formGroup.value);
  }


}
