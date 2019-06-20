import {Component, OnInit} from '@angular/core';
import {EmployeeActionsService} from '../employee-actions.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employeeList: any;
  headElements = ['ID', 'First Name', 'Last Name', 'Created At', 'Links'];

  constructor(private es: EmployeeActionsService) {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.es.fetchEmployees().subscribe(result => {
      this.employeeList = result;
    });
  }

  ngOnInit() {
  }

}
