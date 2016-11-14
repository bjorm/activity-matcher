const Excel = require('exceljs');
const _ = require('lodash');

const {bla} = require('./model');
const workbook = new Excel.Workbook();

let students;
let courses;

const config = {
    filename: './projektwoche.xlsx',
    student: { 
        worksheet: 'Schüler',
        fields: {
            id: 'id',
            name: 'name',
            firstName: 'vorname',
            prio1: 'Prio 1',
            prio2: 'Prio 2',
            prio3: 'Prio 3'
        }
    },
    courses: { 
        worksheet: 'Kurse',
        fields: {
            limit: 'max-teilnehmer',
            id: 'id',
            name: 'name'
        }
    }
};

function getRowsAsObjects(workbook, worksheetName) {
    const worksheet = workbook.getWorksheet(worksheetName);
    const header = worksheet.getRow(1).values.splice(1);

    worksheet.columns = header.map(header =>  { 
        return { header: header, key: header };
    });

    const objects = [];

    workbook.getWorksheet(worksheetName).eachRow((row, rowNumber) => {
        if (rowNumber > 1) {
            const rowObj = _.zipObject(header, row.values.splice(1));
            objects.push(rowObj);
        }
    });

    return objects;
}

function readStudents(workbook) {
    students = getRowsAsObjects(workbook, config.student.worksheet);
    return workbook;
}

function readCourses(workbook) {
    courses = getRowsAsObjects(workbook, config.courses.worksheet);
    return workbook;
}

function match() {
    students.forEach(student => {
        let prio1 = student.prio1.result; // TODO Fix, only because cell has formula
        let prio2 = student.prio2.result; // TODO Fix, only because cell has formula
        let prio3 = student.prio3.result; // TODO Fix, only because cell has formula

        tryToMatchFor(prio1, student);

        if (student.matched !== true) {
            tryToMatchFor(prio2, student);
        } 
        if (student.matched !== true) {
            tryToMatchFor(prio3, student);
        }

        if (student.matched !== true) {
            console.log(student + ' konnte nicht zugewiesen werden');
        }
    });
}

function tryToMatchFor(prio, student) {
    courses.forEach(course => {
            if (!_.isArray(course.students)) {
                course.students = [];
            } 
            if (!_.isArray(course.waitingList)) {
                course.waitingList = [];
            } 

            if (course.id === prio && 
                course.students.length < course[config.courses.fields.limit]) {
                course.students.push(student);
                student.matched = true;
                console.log(student.vorname + ' ' + student.name + ' kommt in Kurs "' + course.name + '"');
            } else if (course.id === prio) {
                course.waitingList.push(student);
                student.matched = false;
            }
    });
}

function writeMatch(workbook) {
    console.log('\n\n---- Auswertung\n')
    courses.forEach(course => {
        console.log('-- ' + course.name);
        course.students.forEach(student => console.log(student.name + ' ' + student.vorname));
        console.log('\n')
    });  
}

workbook.xlsx.readFile(config.filename)
    .then(readCourses)
    .then(readStudents)
    .then(match)
    .then(writeMatch);

