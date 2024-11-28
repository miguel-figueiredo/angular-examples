import {Component, Input} from '@angular/core';
import {UppercasePipe} from './uppercase.pipe';

@Component({
  selector: 'app-item',
  imports: [
    UppercasePipe
  ],
  templateUrl: './item.component.html',
  standalone: true,
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() item!: Item;

}

export type Item = {
  id: string
  value: string
}
