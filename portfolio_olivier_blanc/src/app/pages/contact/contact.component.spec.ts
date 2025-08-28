import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
