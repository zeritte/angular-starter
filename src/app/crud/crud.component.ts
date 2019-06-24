import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeActionsService} from '../employee-actions.service';
import {ListComponent} from '../list/list.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  isCreate = false;
  isUpdate = false;
  updateID = null;

  @ViewChild(ListComponent)
  child: ListComponent;

  constructor(private es: EmployeeActionsService) {
  }

  ngOnInit() {
  }

  panelSwitch() {
    if (!this.isCreate && !this.isUpdate) {
      this.isCreate = true;
      this.isUpdate = false;
    } else if (this.isCreate) {
      this.isCreate = false;
      this.isUpdate = false;
    } else if (this.isUpdate) {
      this.isUpdate = false;
      this.isCreate = false;
    }
  }

  receiveUpdate($event) {
    this.updateID = $event;
    this.isUpdate = true;
    this.isCreate = false;
  }

  reloadItems() {
    this.child.fetchEmployees();
  }

}
