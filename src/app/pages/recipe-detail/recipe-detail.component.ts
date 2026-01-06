import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe | null = null;

  private router = inject(Router);

  ngOnInit(): void {
    // Allow receiving via router state when navigated programmatically
    if (!this.recipe) {
      const nav = this.router.getCurrentNavigation();
      const stateRecipe = (nav?.extras?.state as any)?.recipe ?? (history.state as any)?.recipe;
      if (stateRecipe) {
        this.recipe = stateRecipe as Recipe;
      }
    }
  }
}
