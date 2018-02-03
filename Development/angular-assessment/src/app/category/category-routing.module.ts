import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';

const routes: Routes = [
    {
        path: 'categories', component: CategoryComponent,
        children: [
            {path: "", redirectTo: 'categories', pathMatch:"full"},
            { path: "view/:code", component: ViewCategoryComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }