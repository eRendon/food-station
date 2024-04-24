import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'
import { Observable } from 'rxjs'
import { IRecipe } from '../../interfaces/IRecipe'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private apiKey: string = '960925ac231f4088a3d285cc8e8be49a'
  constructor(private httpService: HttpService) { }

  searchRecipesByIngredients(ingredients: string[]): Observable<IRecipe> {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.apiKey}&query=${ingredients.join(' ')  }&language=es`;
    return this.httpService.getForApi(url)
  }
}
