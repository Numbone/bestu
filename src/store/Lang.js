import { makeAutoObservable } from "mobx"

export default class LangStore{
    constructor(){
        this._lang=localStorage.getItem('lang')
        makeAutoObservable(this)
    }
    setLang(string){
        this._lang=string
    }
   
    get lang(){
        return this._lang
    }


    

   
}