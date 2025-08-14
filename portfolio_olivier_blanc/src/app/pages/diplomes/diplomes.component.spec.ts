import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomesComponent } from './diplomes.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DiplomesComponent', () => {
  let component: DiplomesComponent;
  let fixture: ComponentFixture<DiplomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiplomesComponent],
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

    fixture = TestBed.createComponent(DiplomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
