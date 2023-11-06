import { ICategory } from "../category.model"

export interface IProduct {
    id: number
    name: string
    description: string
    category: ICategory
}