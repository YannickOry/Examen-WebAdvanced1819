import Course from '../../../src/js/school/Course';
import Student from '../../../src/js/school/Student';
// naam: Yannick Ory


test('CalculateGrade', () => {
    expect( () => {
        let a = new Student("1");
        let newCourse = new Course("5");
        newCourse.grade = 15;
        a.addCourse(newCourse);
        a.calculateGrade();
    }).toThrow(Error);
});

test('CalculateGrade', () => {
    expect( () => {
        let a = new Student("1");
        let newCourse = new Course("5");
        newCourse.grade = 12;
        a.addCourse(newCourse);
        newCourse.completed(true);
        a.calculateGrade();
    }).toBe(12)
});





