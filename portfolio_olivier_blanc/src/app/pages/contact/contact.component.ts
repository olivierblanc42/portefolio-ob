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

    this.success = true;

    
     
    if (this.success == true){
     setTimeout(()=>{
       this.success = false
     },5000)

      setTimeout(() => {
        this.formGroup.reset({

        });
      }, 5000)

    }




  }


}
