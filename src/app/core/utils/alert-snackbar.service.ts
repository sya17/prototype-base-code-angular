import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertSnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  alert(
    horizontal: MatSnackBarHorizontalPosition,
    vertical: MatSnackBarVerticalPosition,
    msg:string
  ) {
    this._snackBar.open(msg, 'X', {
      horizontalPosition: horizontal,
      verticalPosition: vertical,
      duration: 1000
    });
  }
}
