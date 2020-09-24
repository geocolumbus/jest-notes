"use strict"

export default class Person {

    constructor (name, location, fibNum) {
        this._name = name
        this._location = location
        this._fibNum = fibNum
    }

    get name () {
        return this._name
    }

    set name (name) {
        this._name = name
    }

    get location () {
        return this._location
    }

    set location (location) {
        this._location = location
    }

    get fibNum () {
        return this._fibNum
    }

    set fibNum (fibNum) {
        this._fibNum = fibNum
    }

}
