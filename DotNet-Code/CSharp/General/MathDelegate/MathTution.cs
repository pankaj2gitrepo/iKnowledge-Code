using System.Threading;

namespace MathDelegate
{
    public class MathTution
    {
        public static int Add(int val1, int val2)
        {
            Thread.Sleep(2000);
            return val1 + val2;
        }
    }
}
