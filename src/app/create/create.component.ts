import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeActionsService} from '../employee-actions.service';
import {Employee} from '../Employee';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  public employee: Employee;

  constructor(private fb: FormBuilder, private es: EmployeeActionsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }

  addEmployee() {
    this.employee = this.angForm.value;

    this.es.addEmployee(this.employee).subscribe(result => {
      this.es.fetchEmployees();
    });
  }

  ngOnInit() {
  }

}
