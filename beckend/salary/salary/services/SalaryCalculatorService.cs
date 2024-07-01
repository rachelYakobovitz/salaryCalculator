using Salary.models;

namespace Salary.services
{
    public class SalaryCalculatorService
    {
        public SalaryCalculationResult CalculateSalary(EmployeeData employee)
        {
            decimal basicSalary = CalculateBasicSalary(employee);
            decimal senioritySupplement = CalculateSenioritySupplement(employee, basicSalary);
            decimal additionalWorkSupplement = CalculateAdditionalWorkSupplement(employee, basicSalary);
            decimal baseSalaryBeforeIncrease = basicSalary + senioritySupplement + additionalWorkSupplement;
            decimal salaryIncreaseSupplement = CalculateSalaryIncreaseSupplement(baseSalaryBeforeIncrease, employee.ManagementLevel);
            decimal baseSalaryAfterIncrease = baseSalaryBeforeIncrease + salaryIncreaseSupplement;

            return new SalaryCalculationResult
            {
                BasicSalary = basicSalary,
                SeniorityIncreaseRate = Math.Floor(employee.YearsOfSeniority) * 1.25m,
                SenioritySupplement = senioritySupplement,
                AdditionalWorkSupplement = additionalWorkSupplement,
                BaseSalaryBeforeIncrease = baseSalaryBeforeIncrease,
                SalaryIncreaseRate = salaryIncreaseSupplement / baseSalaryBeforeIncrease * 100,
                WageIncreaseSupplement = salaryIncreaseSupplement,
                BaseSalaryAfterIncrease = baseSalaryAfterIncrease
            };
        }

        private decimal CalculateBasicSalary(EmployeeData employee)
        {
            decimal baseHourlyRate = employee.ProfessionalLevel == "beginner" ? 100 : 120;
            decimal managementAddition = employee.ManagementLevel * 20;
            decimal hourlyRate = baseHourlyRate + managementAddition;
            decimal basicSalary = hourlyRate * 170 * (employee.PartTimePosition / 100.0m);
            return basicSalary;
        }

        private decimal CalculateSenioritySupplement(EmployeeData employee, decimal basicSalary)
        {
            int fullYearsOfSeniority = (int)Math.Floor(employee.YearsOfSeniority);
            return basicSalary * (fullYearsOfSeniority * 1.25m / 100);
        }

        private decimal CalculateAdditionalWorkSupplement(EmployeeData employee, decimal basicSalary)
        {
            if (!employee.EntitledToAdditionalWork)
            {
                return 0;
            }

            decimal rate = employee.Group == "A" ? 1m : 0.5m;
            return basicSalary * (rate / 100);
        }

        private decimal CalculateSalaryIncreaseSupplement(decimal baseSalary, int managementLevel)
        {
            decimal increaseRate = baseSalary <= 20000 ? 1.5m : baseSalary <= 30000 ? 1.25m : 1m;
            decimal managementIncrease = managementLevel * 0.1m;
            return baseSalary * ((increaseRate + managementIncrease) / 100);
        }
    }
}
