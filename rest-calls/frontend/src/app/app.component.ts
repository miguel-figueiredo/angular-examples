import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PetsComponent} from './pets/pets.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PetsComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rest-calls';
}
