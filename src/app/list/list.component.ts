import {Component, OnInit} from '@angular/core';
import {EmployeeActionsService} from '../employee-actions.service';
import {Employee} from '../Employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public employee: Employee;

  constructor(private es: EmployeeActionsService) {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.es.fetchEmployees().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {
  }

}
