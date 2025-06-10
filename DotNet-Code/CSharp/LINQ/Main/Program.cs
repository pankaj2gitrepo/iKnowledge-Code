using Main.Dto;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Main
{
    public class Program
    {
        static void Main(string[] args)
        {
            List<Employee> employees = new List<Employee> {
                new Employee { Id = 1, Name = "1", Salary = 1000, DepartmentId = 1 },
                new Employee { Id = 2, Name = "22", Salary = 2000, DepartmentId = 1 },
                new Employee { Id = 3, Name = "333", Salary = 3000, DepartmentId = 1 },
                new Employee { Id = 4, Name = "4444", Salary = 4000, DepartmentId = 2 },
                new Employee { Id = 5, Name = "55555", Salary = 5000, DepartmentId = 2 },
                new Employee { Id = 6, Name = "666666", Salary = 6000, DepartmentId = 2 },
                new Employee { Id = 7, Name = "7", Salary = 7000, DepartmentId = 3 },
                new Employee { Id = 8, Name = "8", Salary = 8000, DepartmentId = 3 },
                new Employee { Id = 9, Name = "999999999", Salary = 9000, DepartmentId = 4 }
            };
            List<Department> departments = new List<Department> {
                new Department { Id = 1, Name = "D1" },
                new Department { Id = 2, Name = "D2" },
                new Department { Id = 3, Name = "D3" },
                new Department { Id = 4, Name = "D4" },
                new Department { Id = 5, Name = "D5" }
            };

            // Group By
            Console.WriteLine($"\n\n***** GroupBy");
            var groupByDepartment = employees.GroupBy(e => e.DepartmentId);
            foreach (var g in groupByDepartment)
            {
                Console.WriteLine($" -");
                // Note: g has key as well as list
                Console.WriteLine($" DepartmentId  : {g.Key}");
                foreach (var i in g)
                {
                    Console.WriteLine($"   EmployeeName: {i.Name}");
                }
            }

            // ToLookup
            Console.WriteLine($"\n\n***** ToLookup");
            var toLookupDepartment = employees.ToLookup(e => e.DepartmentId);
            foreach (var g in toLookupDepartment)
            {
                Console.WriteLine($" -");
                Console.WriteLine($" DepartmentId  : {g.Key}");
                foreach (var i in g)
                {
                    Console.WriteLine($"   EmployeeName: {i.Name}");
                }
            }

            // Skip: Skip first 4 elements
            Console.WriteLine($"\n\n***** Skip: Skip first 4 elements");
            var employeesSkip = employees.Skip(4);
            foreach (var e in employeesSkip)
            {
                Console.WriteLine($" EmplyeeName: {e.Name}");
            }

            // SkipWhile: Continue Skip until first occurance of Name greater than or equal to 4
            Console.WriteLine($"\n\n***** SkipWhile: Continue Skip until first occurance of Name greater than or equal to 4");
            var employeesSkipWhile = employees.SkipWhile(e => e.Name.Length < 4);
            foreach (var e in employeesSkipWhile)
            {
                Console.WriteLine($" EmplyeeName: {e.Name}");
            }

            // Take: Take first 4 elements
            Console.WriteLine($"\n\n***** Take: Take first 4 elements");
            var employeesTake = employees.Take(4);
            foreach (var e in employeesTake)
            {
                Console.WriteLine($" EmplyeeName: {e.Name}");
            }

            // SkipWhile: Continue Take until first occurance of Name greater than or equal to 4
            Console.WriteLine($"\n\n***** TakeWhile: Continue Take until first occurance of Name greater than or equal to 4");
            var employeesTakeWhile = employees.TakeWhile(e => e.Name.Length < 4);
            foreach (var e in employeesTakeWhile)
            {
                Console.WriteLine($" EmplyeeName: {e.Name}");
            }

            // DefaultIfEmpty
            Console.WriteLine($"\n\n***** DefaultIfEmpty");
            var employeesForDefault = new List<Employee>();
            var defaultEmployees = employeesForDefault.DefaultIfEmpty();
            foreach (var e in defaultEmployees)
            {
                if (e == null)
                {
                    Console.WriteLine($" null Employee");
                }
            }

            // Range
            Console.WriteLine($"\n\n***** Range");
            var generatedRange = Enumerable.Range(0, 5).Select(r => r);
            foreach (var r in generatedRange)
            {
                Console.WriteLine($" r: {r}");
            }

            // Aggregate
            Console.WriteLine($"\n\n***** Aggregate: Sum");
            var sumSalary = employees.Sum(e => e.Salary);
            Console.WriteLine($"Sum Salary: {sumSalary}");

            // Input to Aggregate is int, not Employee
            var sumSalaryWithAggregate = employees.Select(e => e.Salary).ToList().Aggregate((result, item) => result + item);
            Console.WriteLine($"Sum Salary using Aggregate: {sumSalaryWithAggregate}");

            // Input to Aggregate can be Employee
            var sumSalaryWithAggregateAndSeed = employees.Aggregate(5000, (result, item) => result + item.Salary);
            Console.WriteLine($"Sum Salary using Aggregate and Seed: {sumSalaryWithAggregateAndSeed}");

            var sumSalaryWithAggregateAndSeedAndResultSelector = employees.Aggregate(5000, (result, item) => result + item.Salary, result2 => $"${result2}");
            Console.WriteLine($"Sum Salary using Aggregate and Seed and Result selector: {sumSalaryWithAggregateAndSeedAndResultSelector}");

            Console.Read();
        }
    }
}
