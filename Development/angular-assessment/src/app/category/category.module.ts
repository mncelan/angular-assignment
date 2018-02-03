import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ViewCategoryComponent} from "./view-category/view-category.component"; 
import {CategoryComponent} from "./category.component";
import {CategoryRoutingModule} from "./category-routing.module";

@NgModule({
    imports:[
        CommonModule,
        CategoryRoutingModule
    ],
    declarations:[
        CategoryComponent,
        ViewCategoryComponent
    ]
})
export class CategoryModule{


}