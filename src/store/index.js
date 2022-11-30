import { makeAutoObservable } from "mobx"

export default class Basket{
    constructor(this){
        this.cost=cost
        this.totalPrice=totalPrice
        this.basket=[]
        makeAutoObservable(this)

    }
}