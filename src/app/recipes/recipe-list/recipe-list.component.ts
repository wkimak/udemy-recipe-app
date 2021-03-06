import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() handleDetails = new EventEmitter<Recipe>();

  onSelectDetails(recipeItem: Recipe) {
    this.handleDetails.emit(recipeItem);
  }

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/2048x3071/gallery-1504195791-lemon-pepper-chicken-vertical.jpg?resize=180:*'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/2048x3071/gallery-1504195791-lemon-pepper-chicken-vertical.jpg?resize=180:*'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/35/2048x3071/gallery-1504195791-lemon-pepper-chicken-vertical.jpg?resize=180:*')
  ];

}
