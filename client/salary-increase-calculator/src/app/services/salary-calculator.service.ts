// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SalaryCalculatorService {
//   private apiUrl = 'http://localhost:32130/api/SalaryCalculator/calculate';

//   constructor(private http: HttpClient) { }

//   calculateSalary(employeeData: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, employeeData);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeData } from '../modeles/EmployeeData.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryCalculatorService {
  private apiUrl = 'http://localhost:32130/api/SalaryCalculator/calculate';

  constructor(private http: HttpClient) { }

  calculateSalary(employeeData: EmployeeData): Observable<any> {
    return this.http.post<any>(this.apiUrl, employeeData);
  }
}




