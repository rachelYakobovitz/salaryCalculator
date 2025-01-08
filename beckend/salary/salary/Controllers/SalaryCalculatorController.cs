using Microsoft.AspNetCore.Mvc;
using salsryDB.models;
using salaryServices.services;

namespace SalaryIncreaseCalculator.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SalaryCalculatorController : ControllerBase
    {
        private readonly ISalaryCalculatorService _salaryCalculatorService;

        public SalaryCalculatorController(ISalaryCalculatorService salaryCalculatorService)
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
  
