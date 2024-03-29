import { makeAutoObservable } from "mobx"

export default class BasketStore {
    constructor() {
        this._totalPrice = 0
        this._basket = []
        makeAutoObservable(this)
    }
    setBasket(item, isAuth = false) {
        const checkDeviceInBasket = this._basket.findIndex(device => device.id === item.id);
        if (checkDeviceInBasket < 0) {
            this._basket = [...this._basket, {"product_id":item.id,"Count":1,"nameEn":item.name_en,"nameRu":item.name_ru,...item }];
            let totalPrice = 0;
            this._basket.forEach(device => totalPrice += Number(device.price * device.Count));
            this._totalPrice = totalPrice;
        }
        // if(checkDeviceInBasket>0){
        //     this._basket=[]
        // }
        if (!isAuth) {
            localStorage.setItem("basket", JSON.stringify(this._basket));
        }

    }
    setCountDevice(deviceId, action, isAuth = false) {
        const itemInd = this._basket.findIndex(item => item.id === deviceId);
        const itemInState = this._basket.find(device => device.id === deviceId);
        if (action === "+") {
            const newItem = {
                ...itemInState,
                Count: ++itemInState.Count
            }
            this._basket = [...this._basket.slice(0, itemInd), newItem, ...this._basket.slice(itemInd + 1)]
        } else {
            const newItem = {
                ...itemInState,
                Count: itemInState.Count === 1 ? 1 : --itemInState.Count
            }
            this._basket = [...this._basket.slice(0, itemInd), newItem, ...this._basket.slice(itemInd + 1)]
        }

        if (!isAuth) {
            localStorage.setItem("basket", JSON.stringify(this._basket));
        }

        let totalPrice = 0;
        this._basket.forEach(device => totalPrice += Number(device.price * device.Count));
        this._totalPrice = totalPrice;
    }
    setDeleteAllDeviceFromBasket() {
        this._totalPrice = 0;
        return this._basket = [];
    }
    setDeleteItemBasket(device, isAuth = false) {
        // if (isAuth) {
        //     // await deleteDeviceFromBasket(device.id).then(() => {
        //     this._basket = this._basket.filter(item => item.ID !== device.ID);
        //     this._totalPrice -= device.Price * device.count;
        // } else { 
            this._basket = this._basket.filter(item => item.id !== device.id);
            this._totalPrice -= device.price * device.Count;
            localStorage.setItem("basket", JSON.stringify(this._basket));
        // }
    }



    get Basket() {
        return this._basket;
    }

    get Price() {
        return this._totalPrice;
    }
}