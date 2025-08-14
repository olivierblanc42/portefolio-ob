import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationsComponent } from './realizations.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('RealisationsComponent', () => {
  let component: RealizationsComponent;
  let fixture: ComponentFixture<RealizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealizationsComponent],
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

    fixture = TestBed.createComponent(RealizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
