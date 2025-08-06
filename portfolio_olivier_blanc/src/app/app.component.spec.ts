import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have the 'portfolio_olivier_blanc' title`, () => {
    expect(component.title).toEqual('portfolio_olivier_blanc');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Menu');
  });

  it('should render the correct image source', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('.profil') as HTMLImageElement;
    expect(img.src).toContain('/images/photo.webp')
  });

  it('should open the modal', () => {
    component.openMenu();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const modal = compiled.querySelector('.menu-overlay') 
    expect(modal?.classList).toContain('active');
  });

  it('should close the modal', () => {
    component.closeMenuModale();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const modal = compiled.querySelector('.menu-overlay') 
    expect(modal?.classList).not.toContain('active');
  });


  it('should click open the modale ', fakeAsync(() => {
    spyOn(component, 'openMenu')
    let button = fixture.debugElement.nativeElement.querySelector(".menu");
    button.click();
    tick();
    expect(component.openMenu).toHaveBeenCalled();
}));
  it('should click close the modale ', fakeAsync(() => {
    spyOn(component, 'closeMenuModale')
    let button = fixture.debugElement.nativeElement.querySelector(".close-btn");
    button.click();
    tick();
    expect(component.closeMenuModale).toHaveBeenCalled();
  }));


});
