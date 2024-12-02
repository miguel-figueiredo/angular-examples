import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {sequence} from '@angular/animations';

@Component({
  selector: 'app-pets',
  imports: [
    FormsModule
  ],
  templateUrl: './pets.component.html',
  standalone: true,
  styleUrl: './pets.component.scss'
})
export class PetsComponent implements OnInit {
  sequence: number = 0
  pet: string = ''
  pets: Pet[] = []

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getList();
  }

  private getList() {
    this.http.get('http://localhost:4200/api/pets')
      .subscribe((pets: Pet[]) => {
        this.pets = pets
      })
  }

  addItem() {
    console.log('Adding item')
    this.http.post('http://localhost:4200/api/pets', {id: ++this.sequence, name: this.pet})
      .subscribe(() => this.getList())
  }
}

class Pet {
  id: string
  name: string
}
