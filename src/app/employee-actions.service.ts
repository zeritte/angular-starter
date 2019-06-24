import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeActionsService {

  uri = 'http://localhost:8080/employees';

  constructor(private  http: HttpClient) {
  }

  addEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(this.uri, employee);
  }

  fetchEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.uri);
  }

  getEmployeeInfo(id) {
    return this.http.get(this.uri + '/' + id);
  }

  saveEmployee(emp) {
    return this.http.put(this.uri + '/' + emp.id, emp);
  }
}
