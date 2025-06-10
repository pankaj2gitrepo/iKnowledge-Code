using System;

namespace Main
{
    public class Employee
    {
        public readonly int ReadOnlyMember = 1;
        public int NormalMember = 1;

        public Employee()
        {
            Console.WriteLine("Constructor of Employee");
            ReadOnlyMember = 2;
        }

        public void EmployeeMethod()
        {
            Console.WriteLine("EmployeeMethod");
        }
    }
}
