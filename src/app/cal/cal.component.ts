import { Component } from '@angular/core';

@Component({
  selector: 'app-cal',
  standalone: true,
  imports: [],
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
}
