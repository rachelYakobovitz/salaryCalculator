namespace Salary.models
{
    public class EmployeeData
    {
        public int PartTimePosition { get; set; } // 100, 75, 50
        public string ProfessionalLevel { get; set; } // beginner, experienced
        public int ManagementLevel { get; set; } // 0 to 4
        public decimal YearsOfSeniority { get; set; } // Changed to decimal
        public bool EntitledToAdditionalWork { get; set; }
        public string Group { get; set; } // A, B or empty if not entitled
    }
}
