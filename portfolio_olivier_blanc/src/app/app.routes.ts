import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompetencesComponent } from './pages/competences/competences.component';
import {LoisirsComponent} from './pages/loisirs/loisirs.component';
import {RealisationsComponent} from './pages/realisations/realisations.component';
import {DiplomesComponent} from './pages/diplomes/diplomes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'diplomes', component: DiplomesComponent },
  { path: 'loisirs', component: LoisirsComponent },
  { path: 'realisations', component: RealisationsComponent },

];
