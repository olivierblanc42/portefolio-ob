import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillComponent } from './skill.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillComponent],
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

    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
