import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse,HttpRequest, HttpParams, } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Crocery } from '././crocery';
// import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

//import { MessageService } from './message.service';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class CroceryService {

  private croceryUrl = 'api/croceries';

  constructor(private http: HttpClient) { }


  /** GET heroes from the server */
  getCroceries(): Observable<Crocery[]> {
    return this.http.get<Crocery[]>(this.croceryUrl)
  }

    getCroceryByID(code: string): Observable <Crocery> {
      debugger;
      return this.http.get<Crocery>(`${this.croceryUrl}/${code}`);
    }

    // getHero(id: number): Observable<Hero> {
    //   const url = `${this.heroesUrl}/${id}`;
    //   return this.http.get<Hero>(url).

  }
