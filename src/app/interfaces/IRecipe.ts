export interface IRecipe {
  number: number
  offset: number
  results: IResultRecipe[]
  totalResults: number
}

export interface IResultRecipe {
  id: number
  image: string
  imageType: string
  title: string
}
