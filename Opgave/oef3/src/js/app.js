"use strict";

import Course from './school/Course';
import Student from './school/Student';

window.addEventListener("load", ()=> {
	let student=new Student(1);
	let course=new Course(101);
	course.completed=true;
	course.grade=12;
	student.addCourse(course);
	let course2=new Course(111);
	course2.completed=true;
	course2.grade=13;
	student.addCourse(course2);
	let course3=new Course(121);
	student.addCourse(course3);
	let grade = student.calculateGrade();
	document.getElementById("output").appendChild(document.createTextNode(grade));
	} 
);


