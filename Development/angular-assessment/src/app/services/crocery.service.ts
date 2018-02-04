import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest, HttpParams, } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Crocery } from '././crocery';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CroceryService {

  private croceryUrl = 'api/croceries';

  constructor(private http: HttpClient) { }


  /** GET heroes from the server */
  getCroceries(): Observable<Crocery[]> {
    return this.http.get<Crocery[]>(this.croceryUrl)
  }

  getCroceryByID(id: number): Observable<Crocery> {
    // debugger;
    return this.http.get<Crocery>(`${this.croceryUrl}/${id}`);
  }

  /** POST: add crocery*/
  addCrocery(crocery: Crocery): Observable<Crocery> {
    return this.http.post<Crocery>(this.croceryUrl, crocery, httpOptions)
  }

  /** DELETE crocery */
  deleteCrocery(crocery: Crocery): Observable<Crocery> {
    const id = typeof crocery === 'number' ? crocery : crocery.id;
    const url = `${this.croceryUrl}/${id}`;

    return this.http.delete<Crocery>(url, httpOptions)
  }

  /** PUT: insert crocery */
  updateHero(crocery: Crocery): Observable<Crocery> {
    return this.http.put<Crocery>(this.croceryUrl, crocery, httpOptions)
      
  }

}
