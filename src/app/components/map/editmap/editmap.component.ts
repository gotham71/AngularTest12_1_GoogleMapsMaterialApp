import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-editmap',
  templateUrl: './editmap.component.html',
  styleUrls: ['./editmap.component.css']
})
export class EditmapComponent implements OnInit {

  editForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<EditmapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);

      this.editForm = fb.group({
        'title': data.title,
        'description': data.description
      });
      
     }

  ngOnInit() {
  }

  saveChangesInMarker() {
    this.dialogRef.close(this.editForm.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
