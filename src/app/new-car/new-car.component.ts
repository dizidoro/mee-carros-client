import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

import {Color} from '../color';
import {Year} from '../year';
import {Car} from '../car';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {
  prospectControl = new FormControl('', [Validators.required]);
  modelControl = new FormControl('', [Validators.required]);
  yearControl = new FormControl('', [Validators.required]);
  colorControl = new FormControl('', [Validators.required]);

  colors = Color.colors;
  years = Year.years;

  car: Car = new Car();

  constructor(private dialogRef: MatDialogRef<NewCarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  add() {
    if (this.formValid()) {
      this.dialogRef.close(this.car);
    }
  }

  formValid() {
    const formValid = this.prospectControl.valid
      && this.modelControl.valid
      && this.yearControl.valid
      && this.colorControl.valid;
    return formValid;
  }

}
