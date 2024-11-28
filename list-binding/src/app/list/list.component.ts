import {Component, Input} from '@angular/core';
import {Item, ItemComponent} from '../item/item.component';

@Component({
  selector: 'app-list',
  imports: [
    ItemComponent
  ],
  templateUrl: './list.component.html',
  standalone: true,
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() items!: Item[];

  editItem(item: Item) {
    item.value = 'edited';
  }
}
