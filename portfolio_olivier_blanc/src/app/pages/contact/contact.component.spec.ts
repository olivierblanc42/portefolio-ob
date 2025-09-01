import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }),
            snapshot: { paramMap: { get: () => '123' } }
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    component.success = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('should succes false', () => {
  //   component.formGroup.setValue({
  //     email: '',
  //     firstName: '',
  //     lastName: '',
  //     text: ''
  //   });
  //   component.onSubmit()

  //   expect(component.success).toBeFalse();
  // });



  // it('should success true', () => {
  //   component.formGroup.setValue({
  //     email: 'test@example.com',
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     text: 'Hello world'
  //   });
  //   component.onSubmit()
  //   expect(component.success).toBeTrue();
  // });





  // it('should set success to false after timeout', fakeAsync(() => {
  //   component.formGroup.setValue({
  //     email: 'test@example.com',
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     text: 'Hello world'
  //   });
  //   component.onSubmit()

  //   expect(component.success).toBeTrue();
  //   tick(5000);
  //   expect(component.success).toBeFalse();
  // }));



  // it('should reset success to false after 5 seconds', fakeAsync(() => {
  //   component.formGroup.setValue({
  //     email: 'test@example.com',
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     text: 'Hello world'
  //   });
  //   component.onSubmit()
  //   tick(5000);
  //   expect(component.formGroup.value).toEqual({
  //     email: null,
  //     firstName: null,
  //     lastName: null,
  //     text: null
  //   });
  // }));



});
