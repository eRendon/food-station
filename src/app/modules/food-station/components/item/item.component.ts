import { Component, Input, OnInit } from '@angular/core'
import { IProduct } from '../../../../interfaces/IProduct'
import { BagService } from '../../services/bag.service'
import { AlertService } from '../../../../services/alert/alert.service'
import { RecipesService } from '../../../../services/recipes/recipes.service'
import { IResultRecipe } from '../../../../interfaces/IRecipe'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item:IProduct = {
    rating: {
      rate: 0,
      count: 0
    },
    description: '',
    price: 0,
    image: '',
    title: '',
    category: '',
    id: 0
  }

  recipes: IResultRecipe[] = []


  constructor (private cartService: BagService,
               private alertService: AlertService,
               private recipesService: RecipesService
  ) {}

  ngOnInit () {
    this.getRecipe(this.item.title)
  }

  addItem(item: IProduct): void {
    item.quantity = 1
    this.cartService.addToCart(item)
    this.alertService.success('Se ha agregado el item a su carrito.')
  }

  getRecipe(recipe: string): void {
    this.recipesService.searchRecipesByIngredients([recipe]).subscribe({
      next: value => {
        console.log(value)
        this.recipes = value.results
      },
      error: err => {
        console.log(err)
      },
      complete: () => {

      }
    })
  }
}
