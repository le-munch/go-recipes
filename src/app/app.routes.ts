import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateRecipeComponent } from './pages/create-recipe/create-recipe.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-recipe', component: CreateRecipeComponent },
  { path: '**', redirectTo: '' }
];
