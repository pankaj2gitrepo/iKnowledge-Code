using System;
using System.Threading;

namespace MathDelegate
{
    public delegate int DoOperation(int val1, int val2);
    class Program
    {
        static void Main(string[] args)
        {
            DoOperation doOperation = new DoOperation(MathTution.Add);
            Console.WriteLine($"***** Delegates *****");
            Console.WriteLine($"Synchronous");
            int result = doOperation(10, 20);
            Console.WriteLine($"10+20={result}");
            Console.WriteLine($"");

            Console.WriteLine($"Asynchronous: Using EndInvoke");
            IAsyncResult asyncResult1 = doOperation.BeginInvoke(10, 20, null, null);
            Console.WriteLine($"10+20={doOperation.EndInvoke(asyncResult1)}");

            Console.WriteLine($"Asynchronous: Using asyncResult.AsyncWaitHandle.WaitOne()");
            IAsyncResult asyncResult2 = doOperation.BeginInvoke(10, 20, null, null);
            asyncResult2.AsyncWaitHandle.WaitOne();
            Console.WriteLine($"10+20={doOperation.EndInvoke(asyncResult2)}");

            Console.WriteLine($"Asynchronous: Using asyncResult.IsCompleted");
            IAsyncResult asyncResult3 = doOperation.BeginInvoke(10, 20, null, null);
            while (!asyncResult3.IsCompleted)
            {
                Console.WriteLine($"asyncResult3.IsCompleted waiting...");
                Thread.Sleep(500);
            }
            Console.WriteLine($"10+20={doOperation.EndInvoke(asyncResult3)}");

            Console.WriteLine($"Asynchronous: Using Callback");
            IAsyncResult asyncResult4 = doOperation.BeginInvoke(10, 20, new AsyncCallback(GetResultCallback), doOperation);

            Console.WriteLine($"\nPress any key to exit...");
            Console.ReadLine();
        }

        public static void GetResultCallback(IAsyncResult asyncResult)
        {
            Console.WriteLine($"Inside callback");
            DoOperation doOperation = asyncResult.AsyncState as DoOperation;
            Console.WriteLine($"10+20={doOperation.EndInvoke(asyncResult)}");
        }
    }
}
