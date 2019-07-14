"use strict";
// naam: Yannick Ory
export default class Course {

    constructor(_id){
         this.grade = 0;
         this.id = _id;
         this.completed = false;

    }


    get grade() {
        return this._grade;
    }

    set grade(value) {
        if (value > 0 && value < 20){
            this._grade = value;
        }

    }

    get completed() {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}
