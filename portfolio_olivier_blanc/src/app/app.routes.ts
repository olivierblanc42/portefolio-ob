import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'diplomes', loadComponent: () => import('./pages/diplomes/diplomes.component').then((m) => m.DiplomesComponent) },
  { path: 'skill', loadComponent: () => import('./pages/skill/skill.component').then((m) => m.SkillComponent) },
  { path: 'loisirs', loadComponent: () => import('./pages/loisirs/loisirs.component').then((m) => m.LoisirsComponent) },
  { path: 'realisations', loadComponent: () => import('./pages/realizations/realizations.component').then((m) => m.RealizationsComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent) },

];

