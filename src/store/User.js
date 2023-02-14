import { makeAutoObservable } from "mobx"

export default class UserStore{
    constructor(){
        this._isAuth=false
        this._user={}
        this._userName={}
        makeAutoObservable(this)
    }
    setIsAuth(bool){
        this._isAuth=bool
    }
    setUser(user){
        this._user=user
    }
    setUserName(name){
        this._userName=name
    }
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
    get userName(){
        return this._userName
    }
   
}