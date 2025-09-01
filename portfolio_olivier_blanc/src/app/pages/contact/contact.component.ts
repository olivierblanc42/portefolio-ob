import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { NgForm, FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [FaIconComponent, RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  faHouse = faHouse;
  success = false;


  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),

  })

  constructor(
    private router: Router, 
    private http: HttpClient
  ) { }
  ngOnInit(): void {
  }


  isInvalidAndTouchedOrDirty(formControl: FormControl) {
    return formControl.invalid && (formControl.touched || formControl.dirty);
  }

  onSubmit(evt: SubmitEvent) {
    evt.preventDefault();


    const formData = {
      'form-name': 'contact',
      email: this.formGroup.value.email || '',
      firstName: this.formGroup.value.firstName || '',
      lastName: this.formGroup.value.lastName || '',
      text: this.formGroup.value.text || ''
    }
    const headers = new HttpHeaders({
      Accept: 'text/html',
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    this.http
      .post('/', new URLSearchParams(formData).toString(), { headers, responseType: 'text' })
      .subscribe(() => {
        this.success = true;
        if (this.success == true) {
          setTimeout(() => {
            this.success = false
          }, 5000)

          setTimeout(() => {
            this.formGroup.reset({
            });
          }, 5000)

        }
      });

    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) {
      return
    }
  }


}
