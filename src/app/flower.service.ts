import { Injectable } from '@angular/core';
import { Flower } from './flower';
import { FLOWERS } from './sample-flowers';
@Injectable()
export class FlowerService {
  getFlowers(): Promise<Flower[]> {
    return Promise.resolve(FLOWERS);
  }
}