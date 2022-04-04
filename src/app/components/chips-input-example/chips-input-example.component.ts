import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-chips-input-example',
  templateUrl: './chips-input-example.component.html',
  styleUrls: ['./chips-input-example.component.css']
})
export class ChipsInputExampleComponent {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  items: Fruit[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.items.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.items.indexOf(fruit);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }
}
