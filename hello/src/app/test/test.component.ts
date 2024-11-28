import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  standalone: true,
  styleUrl: './test.component.scss'
})
export class TestComponent {
  @Input() name: string;
}
