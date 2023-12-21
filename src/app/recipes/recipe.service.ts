import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'Test Desc 1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b6/02/fd/conheca-o-cardapio-do.jpg?w=600&h=400&s=1',
      [
        new Ingredient('Pepperoni', 1),
        new Ingredient('Onions', 2)
      ]),
    new Recipe(
      'Recipe 2',
      'Test Desc 2',
      'https://static.itdg.com.br/images/1200-630/c0402ec0fd16e13c7b7b691151d53e1d/277814-original.jpg',
      [
        new Ingredient('Parsley', 1),
        new Ingredient('Tomatoes', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //returns a new array copy
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}



