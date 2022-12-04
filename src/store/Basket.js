import { makeAutoObservable } from "mobx"

export default class BasketStore {
    constructor() {
        this._totalPrice = 0
        this.basket = []
        makeAutoObservable(this)
    }
}