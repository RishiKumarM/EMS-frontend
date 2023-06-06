import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-warning',
  templateUrl: './delete-warning.component.html',
  styleUrls: ['./delete-warning.component.css']
})
export class DeleteWarningComponent {
  action = "Data has been deleted!! ";
  message = '';
  disabled = false;  
  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DeleteWarningComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(){

    this.dialogRef.close();
  }
  onDelete(message: string, action: string) {
    this._snackBar.open(message, action);
    this.dialogRef.close();
  }

}
