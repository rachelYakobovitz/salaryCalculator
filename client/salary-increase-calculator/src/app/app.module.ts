import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { SalaryCalculatorService } from './services/salary-calculator.service';
import { SalaryCalculatorChildComponent } from './salary-calculator/salary-calculator-child/salary-calculator-child.component';


@NgModule({
  declarations: [
    AppComponent,
    SalaryCalculatorComponent,
    SalaryCalculatorChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule, // Add RouterModule here
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SalaryCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }