import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmployeeActionsService} from '../employee-actions.service';
import {Employee} from '../model/Employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() updateEvent: EventEmitter<number> = new EventEmitter();

  employees: Employee [] = [];
  headElements = ['ID', 'First Name', 'Last Name', 'Created At', '', ''];

  constructor(private es: EmployeeActionsService) {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.es.fetchEmployees().subscribe(result => {
      this.employees = result;
    });
  }

  update(id) {
    this.updateEvent.emit(id);
  }

  checkValue(event: any){
    console.log(event);
  }

  ngOnInit() {
  }

}
