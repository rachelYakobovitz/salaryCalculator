import { Component } from '@angular/core';
import { SalaryCalculatorService } from '../services/salary-calculator.service';
import { EmployeeData } from '../modeles/EmployeeData.model';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent {
  employeeData: EmployeeData = {
    partTimePosition: 100,
    professionalLevel: 'beginner',
    managementLevel: 0,
    yearsOfSeniority: 0,
    entitledToAdditionalWork: false,
    group: ''
  };

  salaryResult: any;

  constructor(private salaryCalculatorService: SalaryCalculatorService) { }

  // שליחה לחישוב השכר
  onSubmit() {
    this.salaryCalculatorService.calculateSalary(this.employeeData).subscribe(result => {
      this.salaryResult = result;
    }, error => {
      console.error('There was an error!', error);
    });
  }

  // איפוס הפרטים
  resetCalculator() {
    this.salaryResult = null;
    this.employeeData = {
      partTimePosition: 100,
      professionalLevel: 'beginner',
      managementLevel: 0,
      yearsOfSeniority: 0,
      entitledToAdditionalWork: false,
      group: ''
    };
  }
}

