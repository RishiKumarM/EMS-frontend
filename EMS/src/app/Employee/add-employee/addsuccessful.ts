import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
 
}

@Component({
  selector: 'addsuccesful',
  templateUrl: './addsuccessful.html',
})
export class Addsuccesful {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}