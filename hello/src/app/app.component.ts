import {Component, Input, OnInit, Output} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {TestComponent} from './test/test.component';
import {interval, map, tap} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, TestComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  @Input() name :string

  id: string

  generateRandomUuid() {
    return Math.random().toString(36).substring(2)
  }

  ngOnInit() {
    interval(1000)
      .pipe(
        map(() => this.generateRandomUuid()))
      .subscribe(value => this.id = value);
  }
}
