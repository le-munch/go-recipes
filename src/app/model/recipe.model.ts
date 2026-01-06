export interface Recipe {
  recipeId: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  creationDate: Date;
  preparationTime: number; // in minutes
  rating: number;
  steps: Step[];
}

export interface Ingredient {
  ingredient: string;
}

export interface Step {
  stepNumber: number;
  stepDescription: string;
}
