import { Component, OnInit } from '@angular/core';
import { Flower } from './flower';
import { FlowerService } from './flower.service';

@Component({
  selector: 'myflowers-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit { 
    flowers: Flower[] = [];

  constructor(private flowerService: FlowerService) { }

  ngOnInit(): void {
    this.flowerService.getFlowers()
      .then(flowers => this.flowers = flowers.slice(1, 5));
  }
}