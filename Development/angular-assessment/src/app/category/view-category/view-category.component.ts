import { Component, Input } from "@angular/core";
import { NgForm } from '@angular/forms';

import { Crocery } from "../../services/crocery";
import { CroceryService } from "../../services/crocery.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "./view-category.component.html",
    styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent {

   // @Input() category: Crocery;
    category:any;
    code: string;
    errorMessage: String;
  

    constructor(private activateRoute: ActivatedRoute,
        private croceryService: CroceryService, ) { }

    ngOnInit() {
        this.activateRoute.params.subscribe(params => {
            this.code = params['code'];

            if(!this.code) {
                console.log("Initialize form");
            }
            this.getCategoryByID(this.code);
        })
       
    }

    getCategoryByID(code) {
        debugger;
      
       // const code = +this.route.snapshot.paramMap.get('code');
        this.croceryService.getCroceryByID(code).subscribe(category => {
            this.category = category;
            console.log("Hi", this.category);
        });
    }

}