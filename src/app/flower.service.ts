import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Flower } from './flower';

@Injectable()
export class FlowerService {

  private flowersUrl = 'api/flowers';  // URL to web api

  constructor(private http: Http) { }

  getFlowers(): Promise<Flower[]> {
    return this.http.get(this.flowersUrl)
               .toPromise()
               .then(response => response.json().data as Flower[])
               .catch(this.handleError);
  }

  getFlower(flower_id: number): Promise<Flower> {
    const url = `${this.flowersUrl}/${flower_id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Flower)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred my flower application In memory service', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(flower: Flower): Promise<Flower> {
  const url = `${this.flowersUrl}/${flower.flower_id}`;
  return this.http
    .put(url, JSON.stringify(flower), {headers: this.headers})
    .toPromise()
    .then(() => flower)
    .catch(this.handleError);
  }

  create(flower_name: string): Promise<Flower> {
    return this.http
      .post(this.flowersUrl, JSON.stringify({flower_name: flower_name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Flower)
      .catch(this.handleError);
  }

  delete(flower_id: number): Promise<void> {
    const url = `${this.flowersUrl}/${flower_id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}