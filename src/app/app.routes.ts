import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateRecipeComponent } from './pages/create-recipe/create-recipe.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-recipe', component: CreateRecipeComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: '**', redirectTo: '' }
];
