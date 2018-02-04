import { Component, Output } from "@angular/core";
import { FormArray, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Input } from "@angular/core";
import { EventEmitter } from "@angular/core";


@Component({
    selector: "input-comp",
    template: `
    
  <form class="form-inline" [formGroup]='formGroup'>
        <div class="form-group mb-2">
            <label for="item" class="sr-only">Item</label>
            <input type="text" formControlName="item" class="form-control" id="item" placeholder="Item">
        </div>
        <div class="form-group mb-1">
        <label for="quantity" class="sr-only">Quantity</label>
        <input type="number" formControlName="quantity" class="form-control" id="quantity" placeholder="Quantity">
        </div> 
        <div class="form-group mx-sm-3 mb-2">
            <label for="price" class="sr-only">Price</label>
            <input type="number" formControlName="price" class="form-control" id="price" placeholder="Price">
        </div>

  <button type="button" class="btn btn-primary mb-2" [disabled]="!formGroup.valid" (click)="addRow()" *ngIf='editing==null'>Add Item</button>
  <button type="button" class="btn btn-primary mb-2" [disabled]="!formGroup.valid" (click)="editRow()" *ngIf='editing!=null'>Edit Item</button>

</form>


  `
})
export class InputComponent {

    formGroup: FormGroup;
    @Output() addRowEvent: EventEmitter<any>;
    //we need to know index we editing and updated item
    @Output() editRowEvent: EventEmitter<{ index: number, item: any }>;

    //using get/set so I can track changes to the @input since the parent container has the array of items captured by child
    //could have used a service or expanded element to manage itself, but wanted to expirement with other ideas
    private _editing: { index: number, item: any } = null;
    @Input() set editing(item: { index: number, item: any }) {
        this._editing = item;
        if (this._editing != undefined && this._editing != null) {
            this.formGroup.patchValue(this._editing.item);
        }
    }

    constructor(private formBuilder: FormBuilder) {

        this.addRowEvent = new EventEmitter<any>();
        this.editRowEvent = new EventEmitter<{ index: number, item: any }>();

        this.formGroup = this.formBuilder.group({
            item: [null, [Validators.required]],
            quantity: [null, [Validators.required]],
            price: [null]
        });
    }

    addRow(): void {
        console.debug("emit > ", this.formGroup);
        this.addRowEvent.emit(this.formGroup.value);
        this.formGroup.reset();
    }

    editRow(): void {
        this.editRowEvent.emit({ index: this._editing.index, item: this.formGroup.value });
        this.formGroup.reset();

    }
    get editing() {
        return this._editing;
    }

}