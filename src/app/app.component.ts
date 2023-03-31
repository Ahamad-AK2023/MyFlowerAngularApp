import { Component } from '@angular/core';

import { Flower } from './flower';

import { FlowerService } from './flower.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{MyPageHeader}}</h1>
    <h2>{{flower.flower_name}} details!</h2>
    <div><label>id: </label>{{flower.flower_id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="flower.flower_name" placeholder="flower_name"><br>
      
    </div>
    <div>
    <label>Decription: {{flower.flower_Desc}}</label>
    </div>

    <h2>My Flowers</h2>
    <ul class="flowers">
      <li *ngFor="let flower of flowers"
        [class.selected]="flower === selectedFlower"
        (click)="onSelect(flower)">
        <span class="badge">{{flower.flower_id}}</span> {{flower.flower_name}}
      </li>
    </ul>
    <div *ngIf="selectedFlower">
      <h2>{{selectedFlower.flower_name}} details!</h2>
      <div><label>id: </label>{{selectedFlower.flower_id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedFlower.flower_name" placeholder="flower_name2"/>
      </div>
      <h2>Description : {{selectedFlower.flower_Desc}}</h2>
    </div>
    <flower-features [flower]="selectedFlower"></flower-features>
   
    `,
  styles: [
    `
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .flowers {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .flowers li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .flowers li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .flowers li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .flowers .text {
      position: relative;
      top: -3px;
    }
    .flowers .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `,
  ],
  providers: [FlowerService]
})
export class AppComponent {
  MyPageHeader = 'Tour of Beautiful flowers';
  flower: Flower = {
    flower_id: 1,
    flower_name: 'Jasmine',
    flower_Desc:
      'The main reason jasmine is so famous is its strong fragrance.',
    flower_Price:'8$'
  };
  flowers: Flower[];
  selectedFlower: Flower;

  constructor(private flowerService: FlowerService) { }
  getFlowers(): void {
    this.flowerService.getFlowers().then(flowers => this.flowers = flowers);
  }

  ngOnInit(): void {
    this.getFlowers();
  }
  onSelect(flower: Flower): void {
    this.selectedFlower = flower;
  }
}
