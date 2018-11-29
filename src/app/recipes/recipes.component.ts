import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe: Recipe;
  
  onHandleDetails = (recipeDetails: Recipe) => {
    this.selectedRecipe = {
      name: recipeDetails.name,
      description: recipeDetails.description,
      imagePath: recipeDetails.imagePath
    }
  }
}
