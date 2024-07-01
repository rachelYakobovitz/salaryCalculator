import { Component, Input } from '@angular/core';
import { EmployeeData } from 'src/app/modeles/EmployeeData.model';


@Component({
    selector: 'app-salary-calculator-child',
    templateUrl: './salary-calculator-child.component.html',
    styleUrls: ['./salary-calculator-child.component.css']
})
export class SalaryCalculatorChildComponent {
    @Input() salaryResult: any;
    @Input() employeeData: EmployeeData | undefined
}
