import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import $ from 'jquery';
import { Recipe } from '../../model/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  title = 'Recipe Management';
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  navigateToDetail(recipe: Recipe): void {
    this.router.navigate(['/recipe', recipe.recipeId], { state: { recipe } });
  }
}
