using System;

namespace PrivateInsideSame
{
    class Program
    {
        private int i = 10;
        static void Main(string[] args)
        {
            Program p = new Program();
            // if object is created inside same class, Private member is accessible via object
            Console.WriteLine($"i: {p.i}");
            Console.ReadLine();
        }
    }

    class Extra
    {
        public void GetMethod()
        {
            Program p = new Program();
            // p.i is not accessible from outside calss Program, as i is private
        }
    }
}
