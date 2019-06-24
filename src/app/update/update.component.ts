import {Component, Input, OnChanges} from '@angular/core';
import {EmployeeActionsService} from '../employee-actions.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../model/Employee';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnChanges {

  @Input() id: number;
  @Input() isOpen: boolean;
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private es: EmployeeActionsService) {
  }

  createForm(emp) {
    this.angForm = this.fb.group({
      firstname: [emp.firstname, Validators.required],
      lastname: [emp.lastname, Validators.required],
      enabled: [emp.enabled, Validators.required]
    });
  }

  ngOnChanges() {
    if (this.id) {
      this.getEmployeeInfo(this.id);
    }
  }

  getEmployeeInfo(id) {
    this.es.getEmployeeInfo(id).subscribe(result => this.createForm(result));
  }

}
