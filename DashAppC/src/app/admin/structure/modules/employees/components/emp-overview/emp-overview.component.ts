import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpNewEditComponent } from '../emp-new-edit/emp-new-edit.component';

@Component({
  selector: 'app-emp-overview',
  templateUrl: './emp-overview.component.html',
  styleUrls: ['./emp-overview.component.css'],
})
export class EmpOverviewComponent {
  constructor(private matDialog: MatDialog) {}
  openAddNewDialog() {
    this.matDialog.open(EmpNewEditComponent);
  }
}
