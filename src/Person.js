"use strict"

export default class Person {

    constructor (name, location, fibNum) {
        console.log(`constructor("${name}", "${location}", "${fibNum})`)
        this._name = name
        this._location = location
        this._fibNum = fibNum
    }

    get name () {
        console.log("get name()")
        return this._name
    }

    set name (name) {
        console.log(`set name("${name}")`)
        this._name = name
    }

    get location () {
        console.log("get location()")
        return this._location
    }

    set location (location) {
        console.log(`set location("${location}")`)
        this._location = location
    }

    get fibNum () {
        console.log("get fibNum()")
        return this._fibNum
    }

    set fibNum (fibNum) {
        console.log(`set fibNum("${fibNum}")`)
        this._fibNum = fibNum
    }

}
