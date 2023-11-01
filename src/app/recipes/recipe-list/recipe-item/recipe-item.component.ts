import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  // @Output()
  // recipeSelected = new EventEmitter<void>();

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)
    //this.recipeSelected.emit();
  }
}
