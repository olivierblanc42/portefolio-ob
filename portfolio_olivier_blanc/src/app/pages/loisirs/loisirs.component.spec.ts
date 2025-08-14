import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoisirsComponent } from './loisirs.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('LoisirsComponent', () => {
  let component: LoisirsComponent;
  let fixture: ComponentFixture<LoisirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoisirsComponent],
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

    fixture = TestBed.createComponent(LoisirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
