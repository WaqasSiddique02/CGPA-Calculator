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
  semesters: { sgpa: number, credit: number }[] = [
    { sgpa: NaN, credit: NaN }
  ];
  cgpa: number = 0;

  addSemester() {
    this.semesters.push({ sgpa: 0, credit: 0 });
  }

  calculateCGPA() {
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    this.semesters.forEach(semester => {
      totalGradePoints += semester.sgpa * semester.credit;
      totalCreditHours += semester.credit;
    });
    this.cgpa = totalGradePoints / totalCreditHours;
  }
}