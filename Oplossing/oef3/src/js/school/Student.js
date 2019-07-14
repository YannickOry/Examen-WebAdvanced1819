"use strict";
import Course from './Course';
// naam: Yannick Ory
export default class Student{


    constructor(id){

       this._id = id;
       this._courses = [];
    }

    addCourse(course){
        if (course instanceof Course){

            this._courses.push(course);

        }else{
            throw new Error("Geen Course Element");
        }
    }

    calculateGrade(){



        if (this._courses.length == 0){
            throw new Error("0 completed courses")
        }else {
            let aantal = 0;
            let som  = 0;
            for (let course of this.courses) {
                if(course._completed == true){
                    som = som + course._grade;
                console.log(som);
                aantal++;
                }

            }
            return som/aantal;
        }


        }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get courses() {
        return this._courses;
    }

    set courses(value) {
        this._courses = value;
    }





}
