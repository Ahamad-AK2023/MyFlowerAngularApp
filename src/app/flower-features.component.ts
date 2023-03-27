import { Component, Input } from '@angular/core';
import { Flower } from './flower';
@Component({
  selector: 'flower-features',
  template: `
    <div *ngIf="flower">
      <h2>{{flower.flower_name}} Features!</h2>
      <div><label>id: </label>{{flower.flower_id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="flower.flower_name" placeholder="flower_name"/>
      </div>
      <div><label>Price: </label>{{flower.flower_Price}}</div>
    </div>
    
  `,
})
export class FlowerFeaturesComponent {
  @Input() flower: Flower;
}
