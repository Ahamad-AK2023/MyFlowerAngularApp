import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flower } from './flower';
import { FlowerService } from './flower.service';

@Component({
  selector: 'my-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: [ './flowers.component.css' ]
})
export class FlowersComponent implements OnInit {
  flowers: Flower[];
  selectedFlower: Flower;

  constructor(
    private router: Router,
    private flowerService: FlowerService) { }

  getFlowers(): void {
    this.flowerService.getFlowers().then(flowers => this.flowers = flowers);
  }

  ngOnInit(): void {
    this.getFlowers();
  }

  onSelect(flower: Flower): void {
    this.selectedFlower = flower;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedFlower.flower_id]);
  }

  add(flower_name: string): void {
    flower_name = flower_name.trim();
    if (!flower_name) { return; }
    this.flowerService.create(flower_name)
      .then(flower => {
        this.flowers.push(flower);
        this.selectedFlower = null;
      });
  }

  delete(flower: Flower): void {
    this.flowerService
        .delete(flower.flower_id)
        .then(() => {
          this.flowers = this.flowers.filter(fl => fl !== flower);
          if (this.selectedFlower === flower) { this.selectedFlower = null; }
        });
  }
}
