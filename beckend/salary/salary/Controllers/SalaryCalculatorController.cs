using Microsoft.AspNetCore.Mvc;
using Salary.models;
using Salary.services;

namespace SalaryIncreaseCalculator.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SalaryCalculatorController : ControllerBase
    {
        private readonly SalaryCalculatorService _salaryCalculatorService;

        public SalaryCalculatorController(SalaryCalculatorService salaryCalculatorService)
        {
            _salaryCalculatorService = salaryCalculatorService;
        }

        // חישוב שכר
        [HttpPost("calculate")]
        public ActionResult<SalaryCalculationResult> CalculateSalary([FromBody] EmployeeData employeeData)
        {
            var result = _salaryCalculatorService.CalculateSalary(employeeData);
            return Ok(result);
        }
    }
}
  
