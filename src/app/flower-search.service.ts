import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Flower } from './flower';
@Injectable()
export class FlowerSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Flower[]> {
    return this.http
               .get(`app/flowers/?flower_name=${term}`)
               .map(response => response.json().data as Flower[]);
  }
}