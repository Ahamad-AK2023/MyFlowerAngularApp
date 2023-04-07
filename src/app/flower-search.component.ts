import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import {Operator} from 'rxjs/Operator'

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

declare module 'rxjs/Subject' {
  interface Subject<T> {
    lift<R>(operator: Operator<T, R>): Observable<R>
  }
}

import { FlowerSearchService } from './flower-search.service';
import { Flower } from './flower';

@Component({
  selector: 'flower-search',
  templateUrl: './flower-search.component.html',
  styleUrls: [ './flower-search.component.css' ],
  providers: [FlowerSearchService]
})
export class FlowerSearchComponent implements OnInit {
  flowers: Observable<Flower[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private flowerSearchService: FlowerSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  
  ngOnInit(): void {
    this.flowers = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.flowerSearchService.search(term)
        // or the observable of empty flowers if there was no search term
        : Observable.of<Flower[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Flower[]>([]);
      });
  }
  
  gotoDetail(flower: Flower): void {
    let link = ['/detail', flower.flower_id];
    this.router.navigate(link);
  }
}