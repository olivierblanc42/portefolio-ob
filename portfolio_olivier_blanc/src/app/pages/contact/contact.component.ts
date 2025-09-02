import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
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
  success = false;
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),

  })
  constructor(
    private router: Router,

  ) { }
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

    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("email", this.formGroup.value.email || "");
    formData.append("lastName", this.formGroup.value.lastName || "");
    formData.append("firstName", this.formGroup.value.firstName || "");
    formData.append("text", this.formGroup.value.text || "");
    formData.append("bot-field", "");

    
     
    fetch("https://portefolio-olivier-blanc.netlify.app/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString()
    })
      .then(() => {
        this.success = true;

        this.formGroup.reset();
        for (let pair of formData.entries()) {
          console.log(pair[0], pair[1]);
        }
        setTimeout(() => (this.success = false), 5000);
      })
      .catch((error) => alert("Erreur: " + error));




  }


}




