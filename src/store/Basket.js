import { makeAutoObservable } from "mobx"

export default class BasketStore {
    constructor() {
        this._totalPrice = 0
        this._basket = []
        makeAutoObservable(this)
    }
    setBasket(item) {
        const checkDeviceInBasket = this._basket.findIndex(device => device.ID === item.ID);
        if(checkDeviceInBasket < 0) {
            this._basket = [...this._basket, {count:1,...item}];
            let totalPrice = 0;
            this._basket.forEach(device => totalPrice += Number(device.Price * device.count));
            this._totalPrice = totalPrice;
        }

        
    }

    // if(!isAuth) {
    //     localStorage.setItem("basket", JSON.stringify(this._basket));
    // }

    get Basket() {
        return this._basket;
    }

    get Price() {
        return this._totalPrice;
    }
}