using System;

namespace Main
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("***** Contructor sequence");
            Employee employee = new Employee();
            int a = Gates.GateNumber;
            Console.WriteLine("ReadOnly Member Changed in Contructor: " + employee.ReadOnlyMember);
            employee.EmployeeMethod();
            Console.WriteLine();

            Console.WriteLine("***** implicit and explicit");
            DurationHour durationHour = new DurationHour(10);
            Console.WriteLine("DurationHour: " + durationHour.Hour);
            DurationMinute durationMinute = durationHour;
            Console.WriteLine("implicit DurationMinute: " + durationMinute.Minute);
            durationHour = (DurationHour)durationMinute;
            Console.WriteLine("explicit DurationHour: " + durationHour.Hour);
            Console.Read();
        }
    }
}
