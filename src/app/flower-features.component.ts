import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Flower } from './flower';
import { FlowerService }  from './flower.service';

@Component({
  selector: 'flower-features',
  templateUrl: './flower-features.component.html',
  styleUrls: [ './flower-features.component.css' ]
})

export class FlowerFeaturesComponent implements OnInit  {
  flower: Flower;
  constructor(
    private flowerService: FlowerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.flowerService.getFlower(+params['flower_id']))
      .subscribe(flower => this.flower = flower);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.flowerService.update(this.flower)
      .then(() => this.goBack());
  }
}
