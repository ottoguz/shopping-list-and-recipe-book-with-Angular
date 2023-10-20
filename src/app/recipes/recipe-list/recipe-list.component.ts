import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Test Desc 1', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b6/02/fd/conheca-o-cardapio-do.jpg?w=600&h=400&s=1'),
    new Recipe('Recipe 2', 'Test Desc 2', 'https://static.itdg.com.br/images/1200-630/c0402ec0fd16e13c7b7b691151d53e1d/277814-original.jpg')
  ];

  onRecipeSelected(selectedRecipe: Recipe) {
    this.recipeWasSelected.emit(selectedRecipe)
  }
}
