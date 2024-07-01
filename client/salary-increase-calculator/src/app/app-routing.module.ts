
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';

const routes: Routes = [
  { path: '', redirectTo: '/salary-calculator', pathMatch: 'full' },
  { path: 'salary-calculator', component: SalaryCalculatorComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }