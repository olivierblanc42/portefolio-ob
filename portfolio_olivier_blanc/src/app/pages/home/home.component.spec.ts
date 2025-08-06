import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { provideRouter } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should render title h2',()=>{
  const compiled = fixture.nativeElement as HTMLElement
  expect(compiled.querySelector('h2')?.textContent).toContain('Blanc Olivier Développeur Front')
})

  it('should render titles h3', () => {
    const compiled = fixture.nativeElement as HTMLElement
    const array = compiled.querySelectorAll('h3');
    expect(array[0].textContent).toContain('Diplômes')
    expect(array[1].textContent).toContain('Compétences')
    expect(array[2].textContent).toContain('Réalisation')
    expect(array[3].textContent).toContain('Loisirs')
    })


});
