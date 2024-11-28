import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ListComponent} from './list/list.component';
import {Item} from './item/item.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'list-binding';
  item: string = '';
  items: Item[] = [];
  currentId: number = 0;

  addItem() {
    this.currentId++;
    this.items.push({
      id: this.currentId.toString(),
      value: this.item
    });
    this.item = '';
  }
}
