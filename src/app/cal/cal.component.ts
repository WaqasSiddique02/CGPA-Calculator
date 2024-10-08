import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cal.component.html',
  styleUrl: './cal.component.scss'
})
export class CalComponent {
  subjects: { grade: number, credit: number }[] = [
    { grade: 0, credit: 0 }
  ];
  cgpa: number = 0;

  addSubject() {
    this.subjects.push({ grade: 0, credit: 0 });
  }

  calculateCGPA() {
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    this.subjects.forEach(subject => {
      totalGradePoints += subject.grade * subject.credit;
      totalCreditHours += subject.credit;
    });
    this.cgpa = totalGradePoints / totalCreditHours;
  }
}