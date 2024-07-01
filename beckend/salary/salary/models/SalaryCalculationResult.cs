namespace Salary.models
{
    public class SalaryCalculationResult
    {
        public decimal BasicSalary { get; set; }
        public decimal SeniorityIncreaseRate { get; set; }
        public decimal SenioritySupplement { get; set; }
        public decimal AdditionalWorkSupplement { get; set; }
        public decimal BaseSalaryBeforeIncrease { get; set; }
        public decimal SalaryIncreaseRate { get; set; }
        public decimal WageIncreaseSupplement { get; set; }
        public decimal BaseSalaryAfterIncrease { get; set; }
    }
}
