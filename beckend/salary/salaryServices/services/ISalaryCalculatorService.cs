using salsryDB.models;

namespace salaryServices.services
{
    public interface ISalaryCalculatorService
    {
        SalaryCalculationResult CalculateSalary(EmployeeData employee);
    }
}