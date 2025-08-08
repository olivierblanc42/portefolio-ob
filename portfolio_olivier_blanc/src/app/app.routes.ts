import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoisirsComponent } from './pages/loisirs/loisirs.component';
import { RealizationsComponent } from './pages/realizations/realizations.component';
import { DiplomesComponent } from './pages/diplomes/diplomes.component';
import { SkillComponent } from './pages/skill/skill.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diplomes', component: DiplomesComponent },
  { path: 'skill', component: SkillComponent },

  { path: 'loisirs', component: LoisirsComponent },
  { path: 'realisations', component: RealizationsComponent },

];
