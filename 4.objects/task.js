function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks =[];
}

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.hasOwnProperty('marks') === true) {
        for(let i = 0; i < marks.length; i++) {
           this.marks.push(marks[i]);  
        } 
    }
}

Student.prototype.getAverage = function (...marks) {   
    if('marks' in this != true || this.marks.length == 0) {
        return 0;
    } else {
        return this.marks.reduce((acc, number) => acc + number, 0) / this.marks.length;
    }
} 

Student.prototype.exclude = function (reason) {
    this.excluded = reason; 
    delete this.marks;
    delete this.subject;

    if(this.hasOwnProperty('marks') === 'undefined' || this.hasOwnProperty('subject') === 'undefined') {
        return reason;
    }     
}
