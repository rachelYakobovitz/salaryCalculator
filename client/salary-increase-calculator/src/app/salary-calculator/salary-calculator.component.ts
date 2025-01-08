import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SalaryCalculatorService } from '../services/salary-calculator.service';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent {
  salaryForm: FormGroup;
  salaryResult: any;

  constructor(private salaryCalculatorService: SalaryCalculatorService) {
    this.salaryForm = new FormGroup({
      partTimePosition: new FormControl(100, Validators.required),
      professionalLevel: new FormControl('beginner', Validators.required),
      managementLevel: new FormControl(0, Validators.required),
      yearsOfSeniority: new FormControl(0, [Validators.required, Validators.min(0)]),
      entitledToAdditionalWork: new FormControl(false),
      group: new FormControl(''),
    });

    // מאזין לשינויי זכאות לקבוצה
    this.salaryForm.get('entitledToAdditionalWork')?.valueChanges.subscribe((value) => {
      if (value) {
        this.salaryForm.get('group')?.setValidators(Validators.required);
      } else {
        this.salaryForm.get('group')?.clearValidators();
      }
      this.salaryForm.get('group')?.updateValueAndValidity();
    });
  }

  // שליחה לחישוב השכר
  onSubmit() {
    if (this.salaryForm.valid) {
      this.salaryCalculatorService.calculateSalary(this.salaryForm.value).subscribe(result => {
        this.salaryResult = result;
      }, error => {
        console.error('There was an error!', error);
      });
    }
  }

  // איפוס הטופס
  resetCalculator() {
    this.salaryForm.reset({
      partTimePosition: 100,
      professionalLevel: 'beginner',
      managementLevel: 0,
      yearsOfSeniority: 0,
      entitledToAdditionalWork: false,
      group: '',
    });
    this.salaryResult = null;
  }
}
