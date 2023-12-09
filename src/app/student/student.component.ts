import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  faculty = ['arjun','darshan','rajkot','gujarat']
  tempFaculty:String[] = [];
  tempFacultyName = '';



  idToUpdate = -1;
  idToSearch = 1;

  addStudent(){
    this.faculty.push(this.tempFacultyName);
    this.tempFacultyName = ""
  }

  searchStudent() {
    this.idToSearch = -1;
    this.tempFaculty = this.faculty.filter((faculty) => {
      return faculty.includes(this.tempFacultyName);
  });
  }

  editStudent(){
    this.faculty[this.idToUpdate] = this.tempFacultyName;
    this.tempFacultyName = ""
    this.idToUpdate = -1;
  }

  setForEdit(name:any, student:any){
    this.tempFacultyName=name;
    this.idToUpdate = student;
  }

  deleteStudent(name:any){
    this.faculty.splice(name,1);
    
  }
}
