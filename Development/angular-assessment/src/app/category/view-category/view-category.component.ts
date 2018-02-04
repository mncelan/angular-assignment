import { Component, Input } from "@angular/core";
import { NgForm, FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Crocery } from "../../services/crocery";
import { CroceryService } from "../../services/crocery.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Validators } from "@angular/forms";



@Component({
    templateUrl: "./view-category.component.html",
    styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent {


    errorMessage: String;
    crocery: Crocery = new Crocery();
    formArray: FormArray;
    items: Array<any>;
    canSave: boolean = false;
    editableItem: { index: number, item: any };

    constructor(private activateRoute: ActivatedRoute, private router: Router,
        private croceryService: CroceryService, private formBuilder: FormBuilder) { }

    ngOnInit() {

        console.debug("params", this.activateRoute.params);
        this.activateRoute.params.subscribe(params => {
            this.getCategoryByID(+params['id']);
        });

        this.formArray = this.formBuilder.array([]);

        this.formArray.valueChanges.subscribe((value) => {
            console.debug("vlaues > ", value);
            this.canSave = (this.formArray.valid && this.formArray.length > 0) ? true : false;
        });
    }
//Adding items to a table row
    addRow(rowData: any) {
        let formGroup: FormGroup = this.formBuilder.group({
            item: [null, [Validators.required]],
            quantity: [null, [Validators.required]],
            price: [null]
        });
        formGroup.patchValue(rowData);
        this.formArray.push(formGroup);
        console.debug("logic to add row, item >> ", formGroup.value, " values >>", this.formArray.value);

        this.items = this.formArray.value;

    }

    getCategoryByID(id: number) {
        console.debug("find category by id", id);

        this.croceryService.getCroceryByID(id).subscribe((crocery: Crocery) => {
            console.log("category > ", crocery);
            this.crocery = crocery;

        });
    }

    save() {
        if (this.formArray.valid && this.formArray.length > 0) {
            console.debug("saving items >>", this.formArray.value);
            this.crocery.items = this.formArray.value;

            this.croceryService.updateHero(this.crocery).subscribe(crocery => {
                console.debug("saved", crocery);
            });

        }
    }

    delete(index: number): void {

        (this.formArray.value as Array<any>).forEach((item, itemIndex) => {
            if (index === itemIndex) {
                let removedItem = this.items[itemIndex];
                this.items.splice(index, 1);

                this.formArray.removeAt(index);

                console.debug("removed item ", removedItem);
            }
        });
    }


    doEdit(index: number): void {
        (this.formArray.value as Array<any>).forEach((item, itemIndex) => {
            if (index === itemIndex) {
                this.editableItem = { index: itemIndex, item: this.items[itemIndex] };
            }
        });
    }
    edit(item: { index: number, item: any }) {
        console.debug("edited ", "new ", item, " old ", this.editableItem);

        this.formArray.at(item.index).patchValue(item.item);
        this.items = this.formArray.value;

        this.editableItem = null;
    }

    deleteCategory() {

        var r = confirm("Are you sure you want to delete this crocery :" + this.crocery.description);
        if (r == true) {
            this.croceryService.deleteCrocery(this.crocery).subscribe((response) => {
                this.router.navigate(["/"]);
            }, (error) => {
                alert("Failed to delete crocery error" + error.errorMessage);
            });
        } else {

        }
        //TODO:refresh the nav bar when deleting a category

    }
}