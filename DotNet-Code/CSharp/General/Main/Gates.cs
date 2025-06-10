using System;

namespace Main
{
    public static class Gates
    {
        public static int GateNumber = 1;
        static Gates()
        {
            Console.WriteLine("Constructor of StaticClass: Gates, called only after first time any member accessed");
        }
    }
}
