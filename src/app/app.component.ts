import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalComponent } from "./cal/cal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cgpaCal';
}
