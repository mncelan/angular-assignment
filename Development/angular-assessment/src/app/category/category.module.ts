import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ViewCategoryComponent} from "./view-category/view-category.component"; 
import {CategoryComponent} from "./category.component";
import {CategoryRoutingModule} from "./category-routing.module";

import {InputComponent} from "../input.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
    imports:[
        CommonModule,
        CategoryRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations:[
        CategoryComponent,
        ViewCategoryComponent,
        InputComponent
    ]
})
export class CategoryModule{


}