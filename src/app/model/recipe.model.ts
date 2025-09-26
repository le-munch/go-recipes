export interface Recipe {
  name: string;
  description: string;
  ingredients: Ingredient[];
  steps: string[];
  creationDate: Date;
  preparationTime: number; // in minutes
  rating: number;
}

export interface Ingredient {
  ingredient: string;
}
