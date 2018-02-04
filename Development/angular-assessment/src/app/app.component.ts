import { Component } from '@angular/core';

import { CroceryService } from './services/crocery.service';
import { Crocery } from "./services/crocery";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  croceries: Crocery[] = [];

  constructor(private croceryService: CroceryService, private router: Router) { }

  ngOnInit() {

    this.getCrocery();
  }

  getCrocery(): void {

    this.croceryService.getCroceries().subscribe(croceryData => {
      this.croceries = croceryData.slice(0, 6);
      console.log("Getting groceries");
    });
  }
}
